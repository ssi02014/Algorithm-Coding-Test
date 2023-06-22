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
  const board = input.slice(1).map((el) => el.split(""));
  const result = [0, 0];

  const moves = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const getIsValid = (y, x) => {
    if (x < 0 || y < 0 || x >= m || y >= n || board[y][x] === "#") {
      return false;
    }
    return true;
  };

  const checkBoardValue = (count, y, x) => {
    const value = board[y][x];

    if (value === "o") {
      count[0]++;
    } else if (value === "v") {
      count[1]++;
    }

    board[y][x] = "#";
  };

  const bfs = (startNode) => {
    const queue = [startNode];
    const count = [0, 0];

    checkBoardValue(count, ...startNode);

    while (queue.length) {
      const [curY, curX] = queue.shift();

      moves.forEach((move) => {
        const [dy, dx] = move;
        const [ny, nx] = [curY + dy, curX + dx];

        if (getIsValid(ny, nx)) {
          checkBoardValue(count, ny, nx);
          queue.push([ny, nx]);
        }
      });
    }

    return count;
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] !== "#") {
        const [sheepCount, wolfCount] = bfs([i, j]);

        sheepCount > wolfCount
          ? (result[0] += sheepCount)
          : (result[1] += wolfCount);
      }
    }
  }

  console.log(result.join(" "));
});
