const { defineConfig } = require("cypress");
const { join } = require("path");

module.exports = defineConfig({
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
  },

  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
      viteConfig: {
        server: {
          fs: {
            allow: [
              join(__dirname, "..", "playground-vca"),
              "cypress/testing-components",
            ],
          },
        },
      },
    },
  },
});
