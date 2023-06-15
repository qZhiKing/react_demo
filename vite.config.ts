/*
 * @Description:
 * @Author: qingZhiKing
 * @Date: 2023-05-24 10:42:19
 * @LastEditTime: 2023-06-15 15:12:06
 * @LastEditors: qingZhiKing
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  root: process.cwd(),
  base: "/react-demo/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, ".", "src"),
      "@public": resolve(__dirname, ".", "public"),
    },
  },
  server: {
    port: 1128,
  },
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    target: "modules",
    outDir: resolve(__dirname, "dist"),
    assetsDir: "static",
    assetsInlineLimit: 4096, // 4kb
    cssCodeSplit: true,
    sourcemap: "hidden",
    rollupOptions: {
      output: {
        chunkFileNames: "static/js/[name]-[hash].js",
        entryFileNames: "static/js/[name]-[hash].js",
        assetFileNames: "static/[ext]/[name]-[hash].[ext]",
      },
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
  },
});
