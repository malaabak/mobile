module.exports = {
  extends: "@react-native/typescript-config/tsconfig.json",
  dependencies: {
    "react-native-vector-icons": {
      platforms: {
        ios: null,
      },
    },
  },
  project: {
    ios: {},
    android: {},
  },
  assets: [
    "./resources/fonts/",
    "./node_modules/react-native-vector-icons/Fonts/Feather.ttf",
    "./node_modules/react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf",
    "./node_modules/react-native-vector-icons/Fonts/Octicons.ttf",
  ],
  compilerOptions: {
    baseUrl: ".",
    paths: {
      "@resources/*": ["resources/*"],
      "@components/*": ["src/presentation/common/components/*"],
      "@domain/*": ["src/domain/*"],
      "@presentation/*": ["src/presentation/*"],
      "@data/*": ["./src/data/*"],
    },
  },
}

