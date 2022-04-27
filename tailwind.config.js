const forms = require("@tailwindcss/forms");
const typography = require("@tailwindcss/typography");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.css"],
  plugins: [forms, typography],
};
