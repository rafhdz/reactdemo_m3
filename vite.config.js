// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/reactdemo_m3/", // Muy importante: esto debe coincidir con tu repo
  plugins: [react()],
});
