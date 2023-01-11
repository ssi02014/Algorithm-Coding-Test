const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const n = +input[0];
  const numList = input.slice(1).map(Number).reverse();
  const sequence = Array.from({ length: n }, (_, i) => n - i);
  const stack = [];
  let result = "";

  while (numList.length) {
    if (stack.at(-1) !== numList.at(-1)) {
      stack.push(sequence.pop());
      result += "+\n";
    } else {
      numList.pop();
      stack.pop();
      result += "-\n";
    }

    if (stack.at(-1) > numList.at(-1)) {
      return console.log("NO");
    }
  }

  console.log(result);
});
