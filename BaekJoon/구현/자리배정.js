const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [w, h] = input[0].split(" ").map(Number);
  const position = parseInt(input[1]);
  const map = Array.from(Array(h), () => Array(w).fill(0));
  const [dx, dy] = [
    [-1, 0, 1, 0],
    [0, 1, 0, -1],
  ];

  let cnt = 1;
  let x = 0;
  let y = h - 1;
  let dir = 0;

  while (cnt !== position) {
    console.log(y, x, dir);
    map[y][x] = cnt;

    let nx = x + dx[dir];
    let ny = y + dy[dir];

    if (nx < 0 || ny < 0 || nx >= w || ny >= h || map[ny][nx] !== 0) {
      dir++;
      if (dir === 4) dir = 0;
      nx = x + dx[dir];
      ny = y + dy[dir];
    }

    console.log(nx, ny);

    x = nx;
    y = ny;
  }

  console.log(map);
});
