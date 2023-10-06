import { defineConfig, splitVendorChunkPlugin } from "vite";
import preact from "@preact/preset-vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), preact(), splitVendorChunkPlugin()],
  build: {
    assetsDir: ".",
    cssCodeSplit: false,
    target: "esnext",
    minify: "esbuild",
    sourcemap: false,
  },
});
