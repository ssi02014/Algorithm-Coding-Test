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
  let [shareNum, remainderNum, sumRemainderNum, newNum] = [0, 0, 0, 0];
  let count = 0;
  let temp = N;

  while (true) {
    count++;

    shareNum = parseInt(temp / 10);
    remainderNum = temp % 10;
    sumRemainderNum = (shareNum + remainderNum) % 10;

    newNum = remainderNum * 10 + sumRemainderNum;
    temp = newNum;

    if (newNum === N) break;
  }

  console.log(count);
});
