module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        "root": ["./src"],
        "extensions": [
          ".ios.ts",
          ".android.ts",
          ".ts",
          ".ios.tsx",
          ".android.tsx",
          ".tsx",
          ".jsx",
          ".js",
          ".json",
          ".png",
          ".svg",
        ],
        "alias": {
          "@common": "./src/common",
          "@navigation": "./src/navigation",
        }
      }
    ],
    'react-native-reanimated/plugin',
  ]
};
