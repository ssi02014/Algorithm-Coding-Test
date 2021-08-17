const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const startPosition = input[0].split("");
  const row = parseInt(startPosition[1]);
  const column = startPosition[0].charCodeAt(0) - 96;
  const [dx, dy] = [[-2, -1, 1, 2, 2, 1, -1, -2], [-1, -2, -2, -1, 1, 2, 2, 1]];
  let result = 0;

  function rangeCheck(row, column) {
    if (row < 1 || row > 8 || column < 1 || column > 8) return false;
    return true;
  }

  for (let i = 0; i < dx.length; i++) {
    if (rangeCheck(row + dx[i], column + dy[i])) result++;
  }

  console.log(result);
});
