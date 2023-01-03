const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const moves = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 1],
  ];
  let result = "";

  const rangeCheck = (map, i, j) => {
    const [w, h] = [map.length, map[0].length];

    if (i < 0 || j < 0 || i >= w || j >= h) {
      return false;
    }
    return true;
  };

  const dfs = (map, i, j) => {
    if (rangeCheck(map, i, j) && map[i][j] === 1) {
      map[i][j] = 0;

      moves.forEach(([dx, dy]) => {
        const [nx, ny] = [i + dx, j + dy];

        dfs(map, nx, ny);
      });
    }
  };

  for (let i = 0; i < input.length - 1; i++) {
    const [w, h] = input[i].split(" ").map(Number);
    const map = input
      .slice(i + 1, i + 1 + h)
      .map((el) => el.split(" ").map(Number));
    let count = 0;

    i += h;

    for (let j = 0; j < h; j++) {
      for (let k = 0; k < w; k++) {
        if (map[j][k] === 1) {
          dfs(map, j, k);
          count++;
        }
      }
    }

    result += `${count}\n`;
  }
  console.log(result);
});
