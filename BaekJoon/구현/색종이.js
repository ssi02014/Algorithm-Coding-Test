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
  const field = Array.from(new Array(100), () => Array(100).fill(0));
  let count = 0;

  for (let i = 1; i <= N; i++) {
    const [x, y] = input[i].split(" ").map(Number);

    for (let j = x; j < x + 10; j++) {
      for (let k = y; k < y + 10; k++) {
        field[j][k] = 1;
      }
    }
  }

  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field.length; j++) {
      if (field[i][j] === 1) count++;
    }
  }

  console.log(count);
});
