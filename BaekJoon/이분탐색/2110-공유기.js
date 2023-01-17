const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [n, c] = input[0].split(" ").map(Number);
  const houses = input
    .slice(1)
    .map(Number)
    .sort((a, b) => a - b);

  let [start, end] = [1, houses.at(-1) - houses[0]];
  let result = 0;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    let count = 1;
    let prevHouse = houses[0];

    for (let i = 1; i < n; i++) {
      if (houses[i] - prevHouse >= mid) {
        count++;
        prevHouse = houses[i];
      }
    }

    if (count >= c) {
      result = Math.max(result, mid);
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  console.log(result);
});
