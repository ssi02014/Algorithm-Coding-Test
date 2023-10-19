const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const MAX = 50;
  const moves = input[1];
  const graph = Array.from({ length: MAX * 2 + 1 }, () => {
    return Array(MAX * 2 + 1).fill("#");
  });
  const directions = {
    W: [0, 1], // 동
    E: [0, -1], // 서
    S: [1, 0], // 남
    N: [-1, 0], // 북
  };
  let [y, x] = [50, 50];
  let [minY, minX] = [y, x];
  let [maxY, maxX] = [y, x];
  let curDirection = "S";
  let result = "";

  const changeDirection = (direction) => {
    switch (curDirection) {
      case "W":
        curDirection = direction === "R" ? "S" : "N";
        break;
      case "E":
        curDirection = direction === "R" ? "N" : "S";
        break;
      case "S":
        curDirection = direction === "R" ? "E" : "W";
        break;
      default:
        curDirection = direction === "R" ? "W" : "E";
        break;
    }
  };

  graph[y][x] = ".";

  for (const move of moves) {
    if (move === "R" || move === "L") {
      changeDirection(move);
      continue;
    }
    const [dy, dx] = directions[curDirection];

    y += dy;
    x += dx;

    [minY, minX] = [Math.min(y, minY), Math.min(x, minX)];
    [maxY, maxX] = [Math.max(y, maxY), Math.max(x, maxX)];

    graph[y][x] = ".";
  }

  for (let i = minY; i <= maxY; i++) {
    let temp = "";

    for (let j = minX; j <= maxX; j++) {
      temp += graph[i][j];
    }

    result += `${temp}\n`;
  }

  console.log(result);
});
