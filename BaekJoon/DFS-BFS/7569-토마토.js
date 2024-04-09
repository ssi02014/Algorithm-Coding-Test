/**
 * @description
 * 문제 주소: https://www.acmicpc.net/problem/7569
 * 알고리즘: BFS
 */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [m, n, h] = input[0].split(" ").map(Number);
  const infos = input.slice(1).map((el) => el.split(" ").map(Number));
  const farm = Array.from({ length: h }, (_, idx) => {
    return infos.slice(idx * n, (idx + 1) * n);
  });
  const queue = [];
  let queueIdx = 0;
  let result = 0;

  // [y, x, z]
  const moves = [
    [0, 1, 0],
    [0, -1, 0],
    [1, 0, 0],
    [-1, 0, 0],
    [0, 0, 1],
    [0, 0, -1],
  ];

  const rangeCheck = (y, x, z) => {
    if (x < 0 || x >= m || y < 0 || y >= n || z < 0 || z >= h) {
      return false;
    }
    return true;
  };

  /**
   * 주의할 점: shift()를 사용하면 시간초과 발생
   * queueIdx를 활용하자!
   */
  const bfs = () => {
    while (queue.length > queueIdx) {
      const [curY, curX, curZ] = queue[queueIdx++];

      moves.forEach((move) => {
        const [dy, dx, dz] = move;
        const [ny, nx, nz] = [curY + dy, curX + dx, curZ + dz];

        if (rangeCheck(ny, nx, nz) && !farm[nz][ny][nx]) {
          farm[nz][ny][nx] = farm[curZ][curY][curX] + 1;
          queue.push([ny, nx, nz]);
        }
      });
    }
  };

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < m; k++) {
        if (farm[i][j][k] === 1) {
          queue.push([j, k, i]);
        }
      }
    }
  }

  bfs();

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < m; k++) {
        if (farm[i][j][k] === 0) {
          console.log(-1);
          return;
        }
        result = Math.max(result, farm[i][j][k]);
      }
    }
  }

  console.log(result - 1);
});
