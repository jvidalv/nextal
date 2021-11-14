const forms = require("@tailwindcss/forms");
const typography = require("@tailwindcss/typography");

module.exports = {
  mode: "jit",
  darkMode: "class",
  purge: [
    "./pages/**/*.{css}",
    "./styles/**/*.{css}",
    "./components/**/*.{css}",
  ],
  plugins: [forms, typography],
};
