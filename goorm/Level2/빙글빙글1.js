const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const n = Number(input[0]);
  const graph = Array.from(Array(n), () => Array(n * 2));

  let length = n;
  let [x, y, flag] = [0, -2, 1];

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length * 2; j++) {
      graph[i][j] = " ";
    }
  }

  for (let i = 0; i < length * 2; i++) {
    y += 1;
    if (i % 2 === 0) graph[0][i] = "#";
  }

  length--;

  while (length > 0) {
    for (let i = 0; i < length; i++) {
      x += flag;
      graph[x][y] = "#";
    }

    flag *= -1;

    for (let i = 0; i < length * 2; i++) {
      y += flag;
      if (y % 2 === 0) graph[x][y] = "#";
    }

    length -= 2;
  }

  graph.map((el) => console.log(el.join("")));
});
