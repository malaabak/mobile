module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    "nativewind/babel",
    [
      "module-resolver",
      {
        root: ["./"],
        extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
        alias: {
          "@resources": "./resources/",
          "@components": "./src/presentation/common/components/",
          "@domain": "./src/domain/",
          "@data": "./src/data/",
          "@presentation": "./src/presentation/",
        },
      },
    ],
  ],
}

