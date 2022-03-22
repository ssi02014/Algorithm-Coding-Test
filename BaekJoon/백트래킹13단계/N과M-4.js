const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [n, m] = input[0].split(" ").map(Number);
  const output = [];
  let result = "";

  function recursion(num, depth) {
    if (depth === m) {
      let temp = "";

      for (let i = 0; i < output.length; i++) {
        temp += output[i] + " ";
      }
      result += `${temp}\n`;
      return;
    } else {
      for (let i = num; i <= n; i++) {
        output[depth] = i;
        recursion(i, depth + 1);
      }
    }
  }

  recursion(1, 0);
  console.log(result);
});
