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
  const room = [];
  let [x, y] = [0, 0];

  for (let i = 1; i <= N; i++) {
    room[i - 1] = input[i].split("");
  }

  for (let i = 0; i < N; i++) {
    let countX = 0;
    let countY = 0;

    for (let j = 0; j < N; j++) {
      if (room[i][j] === ".") countX++;
      else {
        if (countX > 1) x++;
        countX = 0;
      }

      if (room[j][i] === ".") countY++;
      else {
        if (countY > 1) y++;
        countY = 0;
      }
    }

    if (countX > 1) x++;
    if (countY > 1) y++;
  }

  console.log(x, y);
});
