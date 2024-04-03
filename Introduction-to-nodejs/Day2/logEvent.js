const fs = require("fs");
const fsPromise = fs.promises;
const path = require("path");
const { v4: uuid } = require("uuid");
const fns = require("date-fns");

const logEvents = async (msg) => {
  const date = fns.format(new Date(), "yyyy/mmm/dd - ddd");
  const uniqueId = uuid();
  const filepath = path.join(__dirname, "logs");
  try {
    if (fs.existsSync(path.join(__dirname, "eventLogs.txt"))) {
      await fsPromise.unlink(path.join(__dirname, "eventLogs.txt"));
    }
    if (!fs.existsSync(filepath)) {
      await fsPromise.mkdir(path.join("./logs"));
    }
    await fsPromise.appendFile(
      path.join(filepath, "eventLogs.txt"),
      `New Text ${date} - ${uniqueId} - ${msg}\n`
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = logEvents;
