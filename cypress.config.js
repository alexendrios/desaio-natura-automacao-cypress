const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
  },
  fixturesFolder: false,
  video: true,
 });