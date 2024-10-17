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
  groupBy,
  isString,
  isNumber,
  uniq,
  uniqBy,
  forEach,
} = require("lodash");
const t = require("@babel/types");
const flagInfoJson = require("../assets/flags-info.json");
const destionationFolder = __dirname + "/../app/flags-svgr/";
const originFolder = __dirname + "/../assets/flags-svg/";

const ignoredFlags = ["bhutan"];
const flagsColors = {};

const flagInfo = flatMap(flagInfoJson).map((flag) => ({
  ...flag,
  country: toLower(flag.country),
}));

// Función para leer el archivo SVG
const readSvgFile = (filePath) => {
  return fs.promises.readFile(filePath, "utf8");
};

// Función para parsear el SVG a JSON
const parseSvg = (svgContent) => {
  return new Promise((resolve, reject) => {
    xml2js.parseString(
      svgContent,
      { explicitChildren: true, preserveChildrenOrder: true },
      (err, result) => {
        if (err) reject(err);
        resolve(result);
      }
    );
  });
};

const transformColor = (stringColor) =>
  ({
    white: "#FFFFFF",
    black: "#000000",
  }[stringColor] || "asdasdasdas");

function getFillColorsWithIDs(parsedSvg) {
  function traverseElement(element, parentId) {
    let fills = [];
    let currentId = element.$?.id || parentId;
    let fillColor = element.$?.fill;

    if (fillColor) {
      fills.push({ id: currentId, fill: fillColor });
    }

    // Recorrer los hijos (si existen)
    if (element.$$) {
      for (let child of element.$$) {
        fills = fills.concat(traverseElement(child, currentId));
      }
    }

    return fills;
  }

  return traverseElement(parsedSvg.svg, null);
}

const extractPathColors = (svgJson, country) => {
  const svgFillColors = getFillColorsWithIDs(svgJson);
  const filteredColors = uniqBy(
    uniqBy(
      filter(
        svgFillColors,
        ({ id, fill }) =>
          includes(country.colors, toUpper(fill)) ||
          includes(country.colors, toUpper(transformColor(fill)))
      ),
      ({ id }) => id
    ),
    ({ fill }) => fill
  );

  const colors = {};

  filteredColors.forEach((color) => {
    colors[color.id] = color.fill;
  });

  if (filteredColors.length !== country.colors.length) {
    console.error(toUpper(country.country), "generated colors not match");
  }

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
      expandProps: true,
      plugins: ["@svgr/plugin-jsx", "@svgr/plugin-prettier"],
      native: true,
      // replaceAttrValues: { white: "#FFFFFF", black: "#000000" },
      typescript: true,
      template: (variables, { tpl }) => {
        const checkAndAddProps = (element, parentElementId) => {
          const { openingElement } = element;
          const { attributes } = openingElement;

          const elementIdAttribute = find(
            attributes,
            (attribute) => attribute.name.name === "id"
          );

          const fillOpacityAttribute = find(
            attributes,
            (attribute) => attribute.name.name === "fillOpacity"
          );

          // checkear el fill-opacity.

          const elementId = elementIdAttribute?.value?.value;
          const currentElementId =
            isString(elementId) && !isNumber(elementId)
              ? elementId
              : parentElementId;
          const currentColor = colors[currentElementId];
          const fillOpacity = fillOpacityAttribute?.value?.expression?.value;

          if (
            currentColor &&
            currentElementId &&
            (fillOpacity === 0.5 || fillOpacity === 1)
          ) {
            const fillIndex = findIndex(
              element.openingElement.attributes,
              (attribute) => attribute.name.name === "fill"
            );

            element.openingElement.attributes[fillIndex] =
              createFillAttribute(currentElementId);

            const fillOpacityIndex = findIndex(
              element.openingElement.attributes,
              (attribute) => attribute.name.name === "fillOpacity"
            );

            element.openingElement.attributes[
              fillOpacityIndex
            ].value.expression.value = 1;

            element.openingElement.attributes.push(
              createOnPressAttribute(currentElementId)
            );
          } else if (currentColor && currentElementId) {
            element.openingElement.attributes.push(
              createOnPressAttribute(currentElementId)
            );
          }

          if (size(element.children) > 0) {
            element.children = element.children.map((child) =>
              checkAndAddProps(child, currentElementId)
            );
          }

          return element;
        };

        const customTsx = checkAndAddProps(variables.jsx);

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

const getCountryNameByFile = (filePathA) =>
  kebabCase(toLower(path.basename(path.dirname(filePathA))));

const convertSvgToSvgrFlag = async ([filePathA, filePathB]) => {
  try {
    const countryName = getCountryNameByFile(filePathA);
    if (includes(ignoredFlags, countryName)) return;

    const countryFolder = destionationFolder + "/" + countryName + "/";

    const country = find(
      flagInfo,
      (flag) => kebabCase(toLower(flag.country)) === countryName
    );

    if (!country) {
      console.error(countryName + " not found in JSON");
      return;
    }

    if (!fs.existsSync(countryFolder)) {
      try {
        await fs.promises.mkdir(countryFolder);
      } catch (e) {}
    }

    // create colors
    const svgContentA = await readSvgFile(filePathA);
    const svgJson = await parseSvg(svgContentA);
    const colors = extractPathColors(svgJson, country);

    // check if colors size differs with provided JSON

    // process A
    const svgrComponentA = await transform(svgContentA, {
      icon: false,
      plugins: ["@svgr/plugin-jsx", "@svgr/plugin-prettier"],
      native: true,
      typescript: true,
    });

    fs.writeFileSync(
      countryFolder + `${kebabCase(countryName)}-svgr.tsx`,
      svgrComponentA
    );

    fs.writeFileSync(
      countryFolder + `${kebabCase(countryName)}-colors.json`,
      JSON.stringify(colors, null, 2)
    );

    flagsColors[countryName] = colors;

    // process B
    const svgContentB = await readSvgFile(filePathB);
    const svgrComponentB = await createSvgrColoredComponent(
      svgContentB,
      colors
    );
    fs.writeFileSync(
      countryFolder + `${kebabCase(countryName)}-lines-svgr.tsx`,
      svgrComponentB
    );
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
  const groupedFiles = groupBy(svgFiles, (filePath) =>
    getCountryNameByFile(filePath)
  );

  // convertSvgToSvgrFlag([
  //   "/Users/asaracho/projects/flag-game/assets/flags-svg/oceania/kiribati/a.svg",
  //   "/Users/asaracho/projects/flag-game/assets/flags-svg/oceania/kiribati/b.svg",
  // ]);
  await Promise.all(map(groupedFiles, convertSvgToSvgrFlag));

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

  fs.promises.writeFile(
    destionationFolder + "/flags-colors.json",
    JSON.stringify(flagsColors, null, 2)
  );

  console.log("Done!");
};

generate();
