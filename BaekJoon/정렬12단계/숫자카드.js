const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const N = parseInt(input[0]);
  const havaCard = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const M = parseInt(input[2]);
  const setCard = input[3].split(" ").map(Number);
  const result = [];

  for (let i = 0; i < M; i++) {
    let low = 0;
    let high = N;
    let searched = false;

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);

      if (havaCard[mid] === setCard[i]) {
        searched = true;
        break;
      } else if (havaCard[mid] < setCard[i]) low = mid + 1;
      else high = mid - 1;
    }

    if (searched) result.push(1);
    else result.push(0);
  }
  console.log(result.join(" "));
});
