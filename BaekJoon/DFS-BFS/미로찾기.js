const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [n, m] = input[0].split(" ").map(Number);
  const [dx, dy] = [
    [1, -1, 0, 0],
    [0, 0, 1, -1],
  ];
  const map = [];

  for (let i = 1; i <= n; i++) {
    map[i - 1] = input[i].split("").map(Number);
  }

  function bfs(x, y) {
    const needVisitQueue = [];
    let [nx, ny] = [0, 0];

    needVisitQueue.push([x, y]);

    while (needVisitQueue.length) {
      const node = needVisitQueue.shift();
      [x, y] = node;

      for (let i = 0; i < dx.length; i++) {
        [nx, ny] = [x + dx[i], y + dy[i]];

        if (!rangeCheck(nx, ny)) continue;
        else if (!map[nx][ny]) continue;
        else if (map[nx][ny] === 1) {
          map[nx][ny] = map[x][y] + 1;
          needVisitQueue.push([nx, ny]);
        }
      }
    }
    return map[n - 1][m - 1];
  }

  function rangeCheck(x, y) {
    if (x >= 0 && x < n && y >= 0 && y < m) return true;
    return false;
  }

  console.log(bfs(0, 0));
});
