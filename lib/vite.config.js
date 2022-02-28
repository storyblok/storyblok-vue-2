import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
import path from "path";

const name = "storyblok-vue-2";

export default defineConfig(() => {
  return {
    build: {
      lib: {
        entry: path.resolve(__dirname, "src", "index.js"),
        name: "storyblokVue",
        fileName: (format) => (format === "es" ? `${name}.mjs` : `${name}.js`),
      },
      rollupOptions: {
        output: {
          globals: {
            vue: "Vue",
            "@vue/composition-api": "VueCompositionAPI",
          },
        },
        external: ["axios", "vue", "@vue/composition-api"], // FIX: temporary till we remove axios dependency in storyblok-js-client
      },
    },
    plugins: [createVuePlugin()],
  };
});
