// docs to refers: https://nodejs.org/docs/latest/api/
const fs = require("fs");
const fsPromises = fs.promises;
const path = require("path");

console.log("__dirname", __dirname);

fs.readFile(path.join(__dirname, "Files", "lorem.txt"), (error, data) => {
  if (error) throw err;
  console.log(data.toString());
});

// fs.writeFile(
//   path.join(__dirname, "Files", "reply.txt"),
//   "Testing Text \n",
//   (err) => {
//     if (err) throw err;
//     console.log("Write Complete");

//     fs.appendFile(
//       path.join(__dirname, "Files", "reply.txt"),
//       "Randow Text",
//       (err) => {
//         if (err) throw err;
//         console.log("Appending complete");

//         fs.rename(
//           path.join(__dirname, "Files", "reply.txt"),
//           path.join(__dirname, "Files", "newError1.txt"),
//           (err) => {
//             console.log("rename complete", err);
//           }
//         );
//       }
//     );
//   }
// );

console.log("hello....\n");

process.on("uncaughtException", (err) => {
  console.log(`There was an uncaught error: ${err}`);
  process.exit(1);
});

const filePath = path.join(__dirname, "Files");

const FileOps = async () => {
  const data = await fsPromises.readFile(path.join(filePath, "random.txt"));

  try {
    await fsPromises.unlink(path.join(filePath, "lorem.txt"));
    await fsPromises.appendFile(
      path.join(filePath, "lorem.txt"),
      `Appending the text with path: ${filePath}`
    );
    await fsPromises.rename(
      path.join(filePath, "lorem.txt"),
      path.join(filePath, "random.txt")
    );
  } catch (err) {
    console.log("err", err);
  }
};

FileOps();
