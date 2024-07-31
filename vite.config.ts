import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["public/vite.svg"],
      manifest: {
        name: "Tira el Dado",
        short_name: "tira-el-dado",
        description: "Tira varios dados",
        theme_color: "#474646",
        icons: [
          {
            src: "public/vite.svg",
            sizes: "192x192",
            type: "image/svg",
          },
          {
            src: "public/vite.svg",
            sizes: "512x512",
            type: "image/svg",
          },
        ],
      },
    }),
  ],
});
