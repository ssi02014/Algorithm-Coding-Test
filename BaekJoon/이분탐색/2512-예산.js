const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const budgetList = input[1].split(" ").map(Number);
  const total = +input[2];
  const curSum = budgetList.reduce((acc, cur) => acc + cur, 0);

  let [start, end] = [0, Math.max(...budgetList)];
  let max = 0;

  if (curSum <= total) {
    console.log(end);
    return;
  }

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    const sum = budgetList.reduce((acc, cur) => {
      if (cur < mid) acc += cur;
      else acc += mid;
      return acc;
    }, 0);

    if (sum <= total) {
      max = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  console.log(max);
});

/**
4
120 110 140 150
485
 */
