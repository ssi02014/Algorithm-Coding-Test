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
  const result = [];

  for (let i = 1; i <= T; i++) {
    const [H, W, N] = input[i].split(" ").map(Number);
    let count = 0;

    for (let j = 1; j <= W; j++) {
      for (let k = 1; k <= H; k++) {
        let strX = "";
        let roomNumber = "";

        count++;

        if (j < 10) {
          strX = "0" + j;
          roomNumber = `${k}${strX}`;
        } else {
          roomNumber = `${k}${j}`;
        }

        if (count === N) {
          result.push(roomNumber);
          break;
        } else if (count > N) {
          break;
        }
      }
    }
  }
  console.log(result.join("\n"));
});
