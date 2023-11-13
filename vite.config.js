import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@assets": "/public/assets",
      "@components": "/src/components",
      "@pages": "/src/pages",
      "@routes": "/src/routes",
      "@styles": "/src/styles",
    },
  },
});
