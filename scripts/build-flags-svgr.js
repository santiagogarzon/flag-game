const fs = require("fs");
const xml2js = require("xml2js");
const { transform } = require("@svgr/core");
const path = require("path");
const {
  findIndex,
  find,
  size,
  flatMap,
  toLower,
  includes,
  toUpper,
  filter,
  kebabCase,
  map,
  replace,
} = require("lodash");
const t = require("@babel/types");
const flagInfoJson = require("../assets/flags-info.json");
const destionationFolder = __dirname + "/../flags-svgr/";
const originFolder = __dirname + "/../assets/flags-svg/";

const flagInfo = flatMap(flagInfoJson).map((flag) => ({
  ...flag,
  country: toLower(flag.country),
}));

function findPaths(tree) {
  let paths = [];

  function search(obj) {
    if (typeof obj !== "object" || obj === null) {
      return;
    }

    if (obj.hasOwnProperty("path")) {
      paths.push(obj["path"]);
    }

    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        search(obj[key]);
      }
    }
  }

  search(tree);
  return paths;
}

// Función para leer el archivo SVG
const readSvgFile = (filePath) => {
  return fs.promises.readFile(filePath, "utf8");
};

// Función para parsear el SVG a JSON
const parseSvg = (svgContent) => {
  return new Promise((resolve, reject) => {
    xml2js.parseString(svgContent, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

const extractPathColors = (svgJson, country) => {
  const paths = findPaths(svgJson.svg)[0] || [];
  const colors = {};
  const includePaths = paths.filter(
    (path) => path.$ && path.$.includePath === "true"
  );
  const selectedPaths = includePaths.length ? includePaths : paths;
  const selectedPathsWithValidColors = filter(selectedPaths, (path) =>
    includes(country.colors, toUpper(path.$.fill))
  );

  selectedPathsWithValidColors.forEach((path) => {
    const id = path.$.id;
    const color = path.$.fill;
    if (color) {
      colors[id] = color;
    }
  });

  return colors;
};

const createOnPressAttribute = (id) =>
  t.jsxAttribute(
    t.jsxIdentifier("onPress"),
    t.jsxExpressionContainer(
      t.arrowFunctionExpression(
        [],
        t.callExpression(
          t.memberExpression(t.identifier("props"), t.identifier("onPress")),
          [t.stringLiteral(id)]
        )
      )
    )
  );

const createFillAttribute = (id) =>
  t.jsxAttribute(
    t.jsxIdentifier("fill"),
    t.jsxExpressionContainer(
      t.memberExpression(
        t.memberExpression(t.identifier("props"), t.identifier("colors")),
        t.stringLiteral(id),
        true
      )
    )
  );

const createSvgrColoredComponent = async (svgContent, colors) => {
  return await transform(
    svgContent,
    {
      icon: false,
      expandProps: false,
      plugins: ["@svgr/plugin-jsx", "@svgr/plugin-prettier"],
      native: true,
      replaceAttrValues: { white: "#FFFFFF", black: "#000000" },
      typescript: true,
      template: (variables, { tpl }) => {
        const checkAndAddProps = (element) => {
          const { openingElement } = element;
          const { attributes } = openingElement;

          const elementIdAttribute = find(
            attributes,
            (attribute) => attribute.name.name === "id"
          );

          // checkear el fill-opacity.

          const elementId = elementIdAttribute?.value?.value;
          const currentColor = colors[elementId];

          if (currentColor && elementId) {
            const fillIndex = findIndex(
              element.openingElement.attributes,
              (attribute) => attribute.name.name === "fill"
            );

            element.openingElement.attributes[fillIndex] =
              createFillAttribute(elementId);
            element.openingElement.attributes.push(
              createOnPressAttribute(elementId)
            );
          }

          if (size(element.children) > 0) {
            element.children = element.children.map(checkAndAddProps);
          }

          return element;
        };

        const customTsx = checkAndAddProps(variables.jsx);
        // const asd = removeXmls(customTsx);

        return tpl`
          ${variables.imports}

          type FlagProps = {
            onPress: (id: string) => void;
            colors: {
              [key: string]: string;
            };
          };

          ${variables.interfaces}

          const ${variables.componentName} = (props: FlagProps) => {
            return (
              ${customTsx}
            );
          };

          ${variables.exports}
        `;
      },
    },
    { componentName: "Flag", filePath: "Flag.tsx" }
  );
};

const convertSvgToSvgrFlag = async (filePath) => {
  try {
    const type = path.basename(filePath, path.extname(filePath));
    const countryName = kebabCase(
      toLower(path.basename(path.dirname(filePath)))
    );
    const countryFolder = destionationFolder + "/" + countryName + "/";

    const country = find(
      flagInfo,
      (flag) => kebabCase(toLower(flag.country)) === countryName
    );
    const svgContent = await readSvgFile(filePath);

    if (!country) {
      console.error(countryName + " not found in JSON");
      return;
    }

    if (!fs.existsSync(countryFolder)) {
      await fs.promises.mkdir(countryFolder);
    }

    if (type === "a" && country) {
      const svgJson = await parseSvg(svgContent);
      const colors = extractPathColors(svgJson, country);
      const svgrComponent = await createSvgrColoredComponent(
        svgContent,
        colors
      );

      fs.writeFileSync(
        countryFolder + `${kebabCase(countryName)}-svgr.tsx`,
        svgrComponent
      );

      fs.writeFileSync(
        countryFolder + `${kebabCase(countryName)}-colors.json`,
        JSON.stringify(colors, null, 2)
      );
    }

    if (type === "b") {
      const svgrComponent = await transform(svgContent, {
        icon: false,
        expandProps: false,
        plugins: ["@svgr/plugin-jsx", "@svgr/plugin-prettier"],
        native: true,
        typescript: true,
      });
      fs.writeFileSync(
        countryFolder + `${kebabCase(countryName)}-lines-svgr.tsx`,
        svgrComponent
      );
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

const getFiles = (dir, extension, fileList = []) => {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      getFiles(filePath, extension, fileList);
    } else if (filePath.endsWith(extension)) {
      fileList.push(filePath);
    }
  });

  return fileList;
};

const generate = async () => {
  const svgFiles = getFiles(originFolder, ".svg");
  await Promise.all(svgFiles.map(convertSvgToSvgrFlag));

  // generate exported components
  // read files into destination folder
  const svgrFiles = getFiles(destionationFolder, ".tsx");

  const moduleResolverFile = `
    export const importSvgr = (param: string) => {
      switch (param) {
        ${map(svgrFiles, (file) => {
          const fileName = path.basename(file, path.extname(file));
          const countryName = replace(fileName, "-svgr", "");
          const countryFolder = replace(countryName, "-lines", "");

          return `
            case '${countryName}':
              return import('./${countryFolder}/${fileName}');
            `;
        }).join("")}
        default:
          throw new Error('Component ' + param + ' not found');
      }
    };
  `;

  fs.promises.writeFile(
    destionationFolder + "/import-svg.ts",
    moduleResolverFile
  );

  console.log("Done!");
};

generate();
