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
  const plans = input[1].split(" ");

  //L, R, U, D
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];
  const moveTypes = ["L", "R", "U", "D"];

  let [x, y] = [1, 1];
  let [nx, ny] = [0, 0];

  for (let plan of plans) {
    moveTypes.forEach((moveType, i) => {
      if (plan === moveType) {
        nx = x + dx[i];
        ny = y + dy[i];
      }
    });

    if (nx < 1 || ny < 1 || nx > N || ny > N) continue;

    [x, y] = [nx, ny];
  }

  console.log(x, y);
});
