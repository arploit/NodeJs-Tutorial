console.log("ls");

const fs = require("fs");
const path = require("path");

const filepath = path.join(__dirname, "Files");

const rs = fs.createReadStream(path.join(filepath, "newError.txt"), {
  encoding: "utf8",
});

const ws = fs.createWriteStream(path.join(filepath, "New-lorem1.txt"));

rs.on("data", (Datachunk) => {
  ws.write(Datachunk);
});
