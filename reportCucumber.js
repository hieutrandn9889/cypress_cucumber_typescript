const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./cypress/reports/cucumber/",
  reportPath: "./cypress/reports/cucumber/report.html",
  metadata: {
    browser: {
      name: "chrome",
      version: "89.0.4389.114",
    },
    device: "Local test machine",
    platform: {
      name: "osx",
      version: "10.15.7",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Actable AI" },
      { label: "Release", value: "0.0.1" },
      { label: "Cycle", value: "B11221.34321" },
      { label: "Execution Start Time", value: "Apr 12th 2021, 02:31 PM EST" },
      { label: "Execution End Time", value: "Apr 12th 2021, 02:56 PM EST" },
    ],
  },
});
