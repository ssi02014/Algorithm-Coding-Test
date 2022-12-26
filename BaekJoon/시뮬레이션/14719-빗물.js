const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [h, w] = input[0].split(" ").map(Number);
  const blocks = input[1].split(" ").map(Number);
  let result = 0;

  for (let i = 0; i < w; i++) {
    const lettMax = Math.max(...blocks.slice(0, i + 1));
    const rightMax = Math.max(...blocks.slice(i));
    const point = Math.min(lettMax, rightMax);

    result += point - blocks[i];
  }

  console.log(result);
});
