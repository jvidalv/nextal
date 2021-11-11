const forms = require("@tailwindcss/forms");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{css}", "./components/**/*.{css}"],
  plugins: [forms],
};
