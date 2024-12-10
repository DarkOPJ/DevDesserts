import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/products": {
        // target: "http://localhost:4000/products",
        target: "https://jsondevdessert.onrender.com/products",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/products/, ""),
      },
    },
  },
});
