module.exports = {
  "*.{ts,tsx,css}": ["prettier . --write"],
  "*.{ts,tsx}": ["eslint --fix", () => "yarn ts", () => "yarn test:ci"],
};
