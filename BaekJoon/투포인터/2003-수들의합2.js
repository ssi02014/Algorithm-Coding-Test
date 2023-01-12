const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  // 풀이
  const [n, m] = input[0].split(" ").map(Number);
  const numList = input[1].split(" ").map(Number);
  let [pointer1, pointer2] = [0, 1];
  let sum = numList[0];
  let result = 0;

  while (pointer2 <= n) {
    if (sum < m) {
      sum += numList[pointer2++];
    } else if (sum > m) {
      sum -= numList[pointer1++];
    } else {
      result++;
      sum += numList[pointer2++];
      sum -= numList[pointer1++];
    }
  }

  console.log(result);
});
