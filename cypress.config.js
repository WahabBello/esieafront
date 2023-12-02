const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1552,
  viewportHeight: 832,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
