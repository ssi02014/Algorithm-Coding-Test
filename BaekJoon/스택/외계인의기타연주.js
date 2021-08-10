const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [n, k] = input[0].split(" ").map(Number);
  const stack = Array.from(Array(7), () => Array());
  let result = 0;

  for (let i = 1; i <= n; i++) {
    const [line, fret] = input[i].split(" ").map(Number);

    if (!stack[line].length) {
      stack[line].push(fret);
      result++;
    } else {
      while (stack[line].length && stack[line][stack[line].length - 1] > fret) {
        stack[line].pop();
        result++;
      }
      if (!stack[line].length || stack[line][stack[line].length - 1] !== fret) {
        stack[line].push(fret);
        result++;
      }
    }
  }
  console.log(result);
});
