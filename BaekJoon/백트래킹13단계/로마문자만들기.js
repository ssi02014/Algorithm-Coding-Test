const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const n = +input[0];
  const number = [1, 5, 10, 50];
  const numberList = Array(1001).fill(0);
  let result = 0;

  backTracking(0, 0, 0);

  console.log(result);

  function backTracking(depth, idx, sum) {
    if (depth === n) {
      if (numberList[sum] === 0) {
        numberList[sum] = 1;
        result++;
      }
      return;
    } else {
      for (let i = idx; i < number.length; i++) {
        backTracking(depth + 1, i, sum + number[i]);
      }
    }
  }
});
