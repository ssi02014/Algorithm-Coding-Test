const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const N = +input[0];
  const stack = [];
  const sequence = [];

  let result = "";
  let a = 1;

  for (let i = 1; i <= N; i++) {
    sequence.push(+input[i]);
  }

  while (sequence.length) {
    if (stack[stack.length - 1] === sequence[0]) {
      sequence.shift();
      stack.pop();
      result += "-" + "\n";
    } else {
      stack.push(a);
      result += "+" + "\n";
      a++;
    }

    if (stack[stack.length - 1] > sequence[0]) {
      return console.log("NO");
    }
  }

  console.log(result);
});
