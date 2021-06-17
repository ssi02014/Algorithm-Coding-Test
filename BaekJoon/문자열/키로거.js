const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const N = parseInt(input[0]);

  for (let i = 1; i <= N; i++) {
    const logger = input[i].split("");
    const left = [];
    const right = [];

    logger.forEach((el) => {
      if (el === ">") {
        if (right.length > 0) left.push(right.pop());
      } else if (el === "<") {
        if (left.length > 0) right.push(left.pop());
      } else if (el === "-") {
        if (left.length > 0) left.pop();
      } else {
        left.push(el);
      }
    });
    console.log(left.concat(right.reverse()).join(""));
  }
});
