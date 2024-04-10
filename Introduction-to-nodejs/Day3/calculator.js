const readline = require("node:readline");
const math = require("math");

const readingInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const calculator = () => {
  let input1, input2;
  readingInterface.question("Enter first value ?", (input) => {
    input1 = input;
    readingInterface.question("Enter Second value? ", (input) => {
      input2 = input;
      console.log(`First Input ${input1} \n Second Input ${input2}`);
      readingInterface.question(
        "What operation do you want to perform\n Add: + \n Subtract: -\n",
        (operations) => {
          performAction(operations, [input1, input2]);
          readingInterface.close();
        }
      );
    });
  });
};

const performAction = (input, value) => {
  switch (input) {
    case "+":
      console.log(
        `Sum of ${value[0]} and ${value[1]} = ${math.add(
          parseInt(value[0]),
          parseInt(value[1])
        )}`
      );
      break;
    case "-":
      console.log(
        `Subtraction of ${value[0]} and ${value[1]} = ${
          parseInt(value[0]) - parseInt(value[1])
        }`
      );
      break;

    default:
      break;
  }
};

readingInterface.question("Let's create a calculator ", calculator());
