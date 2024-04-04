const path = require("path");
const fs = require("fs");
const http = require("http");
const fsPromises = fs.promises;
const EventEmitter = require("events");

const logEvents = require("./logEvent");
const port = 7070;

const server = http.createServer((req, res) => {
  console.log("req", req.url, req.method);
});

server.listen(port, () => {
  console.log("Server Running on port", port);
});
