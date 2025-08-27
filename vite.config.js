import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import critical from "rollup-plugin-critical";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    critical({
      criticalBase: "dist/",
      criticalUrl: "http://localhost:5173",
      criticalPages: [{ uri: "/", template: "index" }],
      criticalConfig: {
        inline: true,
        extract: false,
        dimensions: [
          { width: 360, height: 780 },
          { width: 768, height: 1024 },
          { width: 1024, height: 1366 },
          { width: 1280, height: 720 },
          { width: 1536, height: 864 },
        ],
      },
    }),
  ],
});
