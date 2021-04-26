// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const bracketList = input[0].split("");
  const stack = [];

  for (let i = 0; i < bracketList.length; i++) {
    if (
      bracketList[i] === "(" ||
      bracketList[i] === "{" ||
      bracketList[i] === "["
    ) {
      stack.push(bracketList[i]);
    } else if (bracketList[i] === ")" && stack.length !== 0) {
      if (stack[stack.length - 1] === "(") {
        stack.pop();
      }
    } else if (bracketList[i] === "}" && stack.length !== 0) {
      if (stack[stack.length - 1] === "{") {
        stack.pop();
      }
    } else if (bracketList[i] === "]" && stack.length !== 0) {
      if (stack[stack.length - 1] === "[") {
        stack.pop();
      }
    }
  }

  if (stack.length === 0) console.log("True");
  else console.log("False");
});
