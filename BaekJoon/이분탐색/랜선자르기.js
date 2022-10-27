const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [k, n] = input[0].split(" ").map(Number);
  const lanLines = input.slice(1).map(Number);
  let start = 0;
  let end = Math.max(...lanLines);
  let result = 0;

  // "<="가 중요 포인트
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    let count = 0;

    lanLines.forEach((line) => {
      count += Math.floor(line / mid);
    });

    if (count >= n) {
      start = mid + 1;
      result = Math.max(mid, result);
    } else if (count < n) {
      end = mid - 1;
    }
  }

  console.log(result);
});
