module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["minecraft-linting", "@typescript-eslint"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "minecraft-linting/avoid-unnecessary-command": "error",
  },
};
