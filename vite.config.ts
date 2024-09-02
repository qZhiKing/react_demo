/*
 * @Description:
 * @Author: qingZhiKing
 * @Date: 2023-05-24 10:42:19
 * @LastEditTime: 2024-06-19 11:29:00
 * @LastEditors: qingZhiKing
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  root: process.cwd(),
  base: process.env.NODE_ENV === "development" ? "./react-demo/" : "./",
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, ".", "src"),
      "@public": resolve(__dirname, ".", "public"),
    },
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      less: {
        charset: false,
        additionalData: '@import "./src/style/less.global.less";',
      },
    },
  },
  server: {
    host: "0.0.0.0",
    open: true,
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
