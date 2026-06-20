import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  optimizeDeps: {
    exclude: ["oh-vue-icons/icons"],
  },
  build: {
    chunkSizeWarningLimit: 20000, // Increase limit from 500 kB to 1 MB
  },
});
