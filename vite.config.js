import { defineConfig } from "vite";

export default defineConfig({
  css: {
    postcss: "./postcss.config.cjs",
  },
  build: {
    outDir: "./public/styles",
    assetsDir: "./src/styles",
  },
});