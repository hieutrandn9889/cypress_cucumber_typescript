var file_system = require("fs");
var archiver = require("archiver");
const workingDir = process.cwd();

var output = file_system.createWriteStream(
  workingDir + "/cypress/reports/cucumberReport.zip"
);
var archive = archiver("zip");

archive.on("error", function (err) {
  throw err;
});

archive.directory(workingDir + "/cypress/reports/cucumber", false);

archive.pipe(output);

// append files from a sub-directory and naming it `new-subdir` within the archive
archive.directory("subdir/", "new-subdir");

archive.finalize();
