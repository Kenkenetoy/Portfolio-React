// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Portfolio-React/", // Use the repository name as the base path
  build: {
    outDir: "build",
  },
});
