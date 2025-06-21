import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  base: "/tailwind-gallery-assignment/",
  plugins: [tailwindcss()],
});
