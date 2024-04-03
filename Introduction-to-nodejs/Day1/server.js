// console.log("arpesh", global);
// 1. Nodejs use CommonJS module instead of ES6 modules
// 2. Nodejs has global object instead of windows object

const os = require("os");

// console.log(__dirname);

// console.log(__filename);

const path = require("path");

// console.log("df", path.dirname(__filename));
// console.log("bf", path.basename(__filename));
// console.log("ef", path.extname(__filename));

// console.log("pf", path.parse(__filename));

console.log("Hello world");

const { add, multiply, subtracts, divides } = require("./math");

console.log(add(2, 3));
console.log("multiply(2,3)", multiply(2, 3));
console.log("subtracts(3,2)", subtracts(3, 2));
console.log("divides(4,2)", divides(4, 2));

// Missing some JS APIs like fetch
