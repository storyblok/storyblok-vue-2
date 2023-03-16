import { defineConfig } from "vite";
import createVuePlugin from "@vitejs/plugin-vue2";
// import dts from "vite-plugin-dts";
import path from "path";

const name = "storyblok-vue-2";

export default defineConfig(() => {
  return {
    build: {
      lib: {
        entry: path.resolve(__dirname, "src", "index.ts"),
        name: "storyblokVue",
        fileName: (format) => (format === "es" ? `${name}.mjs` : `${name}.js`),
      },
      rollupOptions: {
        output: {
          globals: {
            vue: "Vue",
            axios: "axios",
          },
        },
        external: ["axios", "vue"], // FIX: temporary till we remove axios dependency in storyblok-js-client
      },
    },
    plugins: [createVuePlugin()],
  };
});
