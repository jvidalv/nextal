// Globs must not overlap: tasks that edit the same file concurrently race.
const code = "*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}";
const format = "oxfmt --no-error-on-unmatched-pattern";

module.exports = {
  [code]: [
    "oxlint --fix",
    format,
    // Same commands as the `ts` and `test:ci` scripts, called directly to skip yarn's startup
    () => "tsc",
    () => "vitest run",
  ],
  // Everything else: oxfmt formats what it supports (JSON, CSS, Markdown, YAML...) and skips the rest
  [`!(${code})`]: format,
};
