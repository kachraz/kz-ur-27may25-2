import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import path, { dirname } from "path"
import { fileURLToPath } from "url"
import { defineConfig } from "vite"

// These are required to resolve the __dirname and __filename variables in ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
