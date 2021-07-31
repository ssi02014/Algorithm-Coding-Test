const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [W, H] = input[0].split(" ").map(Number);
  let [startX, startY] = input[1].split(" ").map(Number);
  const time = parseInt(input[2]);

  startX += time;
  startY += time;

  startX %= 2 * W;
  startY %= 2 * H;

  if (startX > W) startX = 2 * W - startX;
  if (startY > H) startY = 2 * H - startY;

  console.log(startX, startY);
});
