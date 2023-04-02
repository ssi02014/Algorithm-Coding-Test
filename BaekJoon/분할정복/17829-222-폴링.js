const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const k = +input[0];
  const board = input.slice(1).map((el) => el.split(" ").map(Number));

  const recursive = (x, y, size) => {
    if (size === 2) {
      const arr = [];
      let idx = 0;

      for (let i = x; i < x + 2; i++) {
        for (let j = y; j < y + 2; j++) {
          arr[idx++] = board[i][j];
        }
      }

      return arr.sort((a, b) => b - a)[1];
    } else {
      const arr = [];

      size = size / 2;

      arr[0] = recursive(x, y, size);
      arr[1] = recursive(x, y + size, size);
      arr[2] = recursive(x + size, y, size);
      arr[3] = recursive(x + size, y + size, size);

      return arr.sort((a, b) => b - a)[1];
    }
  };

  console.log(recursive(0, 0, k));
});

/*
0 0 8
 0 0 4
  0 0 2 -> 6
*/
