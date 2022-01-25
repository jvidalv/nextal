const forms = require("@tailwindcss/forms");
const typography = require("@tailwindcss/typography");

module.exports = {
  darkMode: "class",
  contents: [
    "./src/**/*.css"
  ],
  plugins: [forms, typography],
};
