import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import path from "path";

export default defineConfig(({ mode }) => {
  const isLib = mode === "lib";

  return {
    plugins: [
      !isLib && react(),
      isLib && cssInjectedByJsPlugin(),
      isLib &&
        dts({
          tsconfigPath: "./tsconfig.app.json",
          insertTypesEntry: true,
          rollupTypes: true,
        }),
    ].filter(Boolean),

    build: isLib
      ? {
          lib: {
            entry: path.resolve(__dirname, "src/lib/index.ts"),
            name: "ReactColorPicker",
            formats: ["es", "cjs"],
            fileName: (format) => `index.${format}.js`,
          },

          rollupOptions: {
            // Prevent bundling React
            external: ["react", "react-dom"],
            output: {
              globals: {
                react: "React",
                "react-dom": "ReactDOM",
              },
            },
          },
          cssCodeSplit: true,
        }
      : {
          outDir: "dist",
        },
  };
});
