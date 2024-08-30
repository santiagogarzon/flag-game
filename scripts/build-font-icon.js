// eslint-disable @typescript-eslint/no-var-requires

const fs = require("fs");
const { promisify } = require("util");
const glob = require("glob");
const xml2js = require("xml2js");
const SVGFixer = require("oslllo-svg-fixer");

const SVGIcons2SVGFontStream = require("svgicons2svgfont");
const SVGIconsDirStream = require("svgicons2svgfont/src/iconsdir.js");

const svg2ttf = require("svg2ttf");

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

function makeSvgFont(fontName, svgs, svgFontPath) {
  const files = glob.sync(svgs);
  const options = {
    // see list of all the options
    // https://github.com/nfroidure/svgicons2svgfont#cli-interface
    // https://github.com/nfroidure/svgicons2svgfont/blob/master/bin/svgicons2svgfont.js#L76
    fontHeight: 1000,
    normalize: true,
  };

  return new Promise((resolve, reject) => {
    new SVGIconsDirStream(files, {})
      .pipe(
        new SVGIcons2SVGFontStream({
          ...options,
          fontName,
        })
      )
      .pipe(fs.createWriteStream(svgFontPath))
      .on("finish", resolve)
      .on("error", reject);
  });
}

async function convertSvg2Ttf(svgFontPath, output) {
  let ttf = svg2ttf(await readFileAsync(svgFontPath, "utf8"), {});
  // eslint-disable-next-line no-undef
  await writeFileAsync(output, Buffer.from(ttf.buffer));
}

async function generateGlyphMap(svgFontPath, output) {
  const parser = new xml2js.Parser();
  const glyphMap = {};
  const data = await readFileAsync(svgFontPath);

  return new Promise((resolve, reject) => {
    parser.parseString(data, function (err, result) {
      if (err !== null) {
        reject(err);
      }
      if (!result) {
        console.error(`cannot parse ${svgFontPath}`);
      }

      const icons = result.svg.defs[0].font[0].glyph;

      icons.forEach(({ $: icon }) => {
        const name = icon["glyph-name"];
        const code = icon.unicode.charCodeAt(0);
        glyphMap[name] = code;
      });

      fs.writeFileSync(output, JSON.stringify(glyphMap, null, 2));

      resolve(glyphMap);
    });
  });
}

async function main() {
  const fontName = "customIcons";

  // this file is temporary
  const iconsPath = "./assets/svg/icons/";
  const fixedIconsPath = "./.temp/icons-fixed/";
  const svgFontDirectoryPath = `./.temp/build/`;
  const svgFontPath = svgFontDirectoryPath + `${fontName}.svg`;
  const fontFolder = `./assets/fonts/${fontName}`;
  const glyphMapPath = `${fontFolder}/${fontName}-map.json`;
  const tffPath = `${fontFolder}/${fontName}.ttf`;

  if (!fs.existsSync(fontFolder)) {
    fs.mkdirSync(fontFolder, { recursive: true });
  }

  if (!fs.existsSync(fixedIconsPath)) {
    fs.mkdirSync(fixedIconsPath, { recursive: true });
  }

  if (!fs.existsSync(svgFontDirectoryPath)) {
    fs.mkdirSync(svgFontDirectoryPath, { recursive: true });
  }

  await SVGFixer(iconsPath, fixedIconsPath).fix();

  // create svg font from svg icons, it will use `svgicons2svgfont` to convert
  // `rect', 'circle` etc... to `path`s that can be used for font generation
  await makeSvgFont(fontName, fixedIconsPath + "*.svg", svgFontPath);

  await Promise.all([
    // create json file with map of icon name and character code in font, needed for `react-native-vector-icons` integration
    generateGlyphMap(svgFontPath, glyphMapPath),
    // convert svg font to ttf font
    convertSvg2Ttf(svgFontPath, tffPath),
  ]);

  // delete temporary files
  fs.rmSync(fixedIconsPath, { recursive: true, force: true });
  fs.rmSync(svgFontDirectoryPath, { recursive: true, force: true });

  console.log(`updated: ${tffPath} and ${glyphMapPath}`);
}

main();
