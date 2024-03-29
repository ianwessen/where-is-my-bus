import { resolve } from "path";
import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      app: resolve(__dirname, "src"),
    },
  },
  build: {
    target: "es2015",
  },
});
