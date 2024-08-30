const babelConfig = function (api) {
  api.cache(true);
  return {
    presets: [["babel-preset-expo", { jsxRuntime: "automatic" }]],
    plugins: [
      [
        "@tamagui/babel-plugin",
        {
          components: ["tamagui"],
          config: "./app/ds/tamagui.config.ts",
          logTimings: true,
          disableExtraction: process.env.NODE_ENV === "development",
        },
      ],
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          alias: {
            src: "./src",
            assets: "./assets",
          },
        },
      ],
    ],
  };
};

module.exports = babelConfig;
