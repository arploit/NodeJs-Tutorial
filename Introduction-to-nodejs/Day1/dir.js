const fs = require("fs");

if (!fs.existsSync("./new")) {
  fs.mkdir("./new", (err) => {
    if (err) throw err;
    console.log("Created the dir");
  });
}

if (!fs.existsSync("./new")) {
  fs.rmdir("./new", (err) => {
    console.log("Removed the dir");
    if (err) throw err;
  });
}
