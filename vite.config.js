import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      includeAssets: ["coffe.svg"],
      manifest: {
        name: "Coffe Maker",
        short_name: "Coffe Maker",
        description: "Learn about how to make a good coffee",
        theme_color: "#312e81",
        background_color: "#e0e7ff",
        icons: [
          {
            src: "coffe.svg",
            sizes: "48x48 72x72 96x96 128x128 256x256 512x512",
            purpose: "any",
            type: "image/svg+xml",
          },
        ],
      },
    }),
  ],
});
