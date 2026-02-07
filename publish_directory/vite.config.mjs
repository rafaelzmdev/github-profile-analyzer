// vite.config.js
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

console.log("VITE CONFIG LOADED")
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://graphql-gha-api.onrender.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

