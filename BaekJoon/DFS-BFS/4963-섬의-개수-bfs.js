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

  const rangeCheck = (map, x, y) => {
    const [w, h] = [map.length, map[0].length];

    if (x < 0 || y < 0 || x >= w || y >= h) {
      return false;
    }
    return true;
  };

  const bfs = (map, x, y) => {
    const queue = [[x, y]];

    while (queue.length) {
      const [curX, curY] = queue.shift();

      if (rangeCheck(map, curX, curY) && map[curX][curY] === 1) {
        map[curX][curY] = 0;

        moves.forEach(([dx, dy]) => {
          const [nx, ny] = [curX + dx, curY + dy];
          queue.push([nx, ny]);
        });
      }
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
          bfs(map, j, k);
          count++;
        }
      }
    }

    result += `${count}\n`;
  }
  console.log(result);
});
