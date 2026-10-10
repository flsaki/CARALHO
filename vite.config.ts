import { defineConfig } from "vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Caminhos relativos permitem publicar em qualquer repositório do GitHub Pages.
  base: "./",
  plugins: [TanStackRouterVite({ target: "react", autoCodeSplitting: true }), viteReact(), tailwindcss()],
  resolve: { tsconfigPaths: true },
  build: { outDir: "dist", emptyOutDir: true },
});
