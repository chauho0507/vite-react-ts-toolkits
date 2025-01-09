module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard-with-typescript", "prettier"],
  overrides: [],
  plugins: ["react"],
  rules: {
    "node/no-callback-literal": "off",
    "comma-dangle": "off",
    "@typescript-eslint/semi": "off",
    "@typescript-eslint/comma-dangle": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        varsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/member-delimiter-style": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/space-before-function-paren": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/no-namespace": "off",
    "no-console": "warn",
    "@typescript-eslint/promise-function-async": "off",
    "generator-star-spacing": ["error", "after"],
    semi: "off",
  },
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
    requireConfigFile: false,
    project: ["./tsconfig.json"],
  },
}
