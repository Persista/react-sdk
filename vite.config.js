//vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.tsx"),
      name: "@persista/react",

      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "@persistajs/core"],
      output: {
        globals: {
          react: "react",
          "@persistajs/core": "@persistajs/core",
        },
      },
    },
  },
});
