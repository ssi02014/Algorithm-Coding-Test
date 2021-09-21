const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let [col, row] = input[0].split(" ").map(Number);
  const k = +input[1];
  const hall = Array.from(Array(row), () => Array(col).fill(0));

  let x = 0;
  let y = -1;
  let count = 1;
  let result = "";

  for (let i = row; i > 0; i -= 2) {
    for (let j = 0; j < i; j++) {
      ++y;

      if (hall[y][x]) break;
      hall[y][x] = count++;
    }
    for (let j = 0; j < col - 1; j++) {
      ++x;

      if (hall[y][x]) break;
      hall[y][x] = count++;
    }
    for (let j = 0; j < i - 1; j++) {
      --y;

      if (hall[y][x]) break;
      hall[y][x] = count++;
    }
    for (let j = 0; j < col - 2; j++) {
      --x;

      if (hall[y][x]) break;
      hall[y][x] = count++;
    }

    col -= 2;
  }

  hall.map((list, y) => {
    list.map((el, x) => el === k && (result += `${x + 1} ${y + 1}`));
  });

  !result ? console.log(0) : console.log(result);
});
