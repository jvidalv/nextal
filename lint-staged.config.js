module.exports = {
  "*.{ts,tsx,css}": ["prettier . --write"],
  "*.{ts,tsx}": [
    "next lint . --cache --fix --ext .tsx --ext .ts",
    () => "yarn ts",
    () => "yarn test:ci",
  ],
};
