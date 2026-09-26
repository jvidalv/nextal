import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Resolve the `@/*` alias from tsconfig.json, like Next.js does
  resolve: { tsconfigPaths: true },
  test: {
    environment: "jsdom",
  },
});
