const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let stack = [];
  let inputs = [];
  let strList = [];
  let brakets = [];

  for (let i = 0; i < input.length; i++) {
    inputs[i] = input[i];
  }

  inputs.map((input) => {
    brakets = [];
    stack = [];
    strList = input.split("");

    if (strList.length === 1 && strList[0] === ".") return;

    strList.map((el) => {
      if (el === "(" || el === "[") stack.push(el);
      if (el === "]") {
        if (stack[stack.length - 1] === "[") stack.pop();
        else stack.push(el);
      }
      if (el === ")") {
        if (stack[stack.length - 1] === "(") stack.pop();
        else stack.push(el);
      }
    });

    if (stack.length === 0) console.log("yes");
    else console.log("no");
  });
});
