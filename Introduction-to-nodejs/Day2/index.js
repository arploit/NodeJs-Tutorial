// const { format } = require("date-fns");
// const { v4: uuid } = require("uuid");

// console.log(format(new Date(), "yyyy-MM-dd\tHH:mm:ss"));

// console.log("Hellossssss", uuid());
const EventEmitter = require("events");
class MyEvent extends EventEmitter {}

const myEvent = new MyEvent();

const logEvents = require("./logEvent");

myEvent.on("log", (msg) => logEvents(msg));

setTimeout(() => {
  myEvent.emit("log", `${new Date()}`);
}, 2000);
