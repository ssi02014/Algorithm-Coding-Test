const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const T = parseInt(input[0]);

  for (let i = 1; i <= T; i++) {
    const [H, _, N] = input[i].split(" ").map(Number);

    let floor = N % H === 0 ? H : N % H;
    let roomNum = Math.ceil(N / H);

    if (roomNum < 10) {
      roomNum = "0" + roomNum;
      console.log(`${floor}${roomNum}`);
    } else {
      console.log(`${floor}${roomNum}`);
    }
  }
});
