const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [N, M] = input[0].split(" ").map(Number);
  const selectNum = input[1].split(" ").map(Number);

  const deque = [];
  let count = 0;

  for (let i = 1; i <= N; i++) {
    deque[i - 1] = i;
  }

  while (selectNum.length !== 0) {
    if (deque[0] === selectNum[0]) {
      deque.shift();
      selectNum.shift();
    } else if (deque.indexOf(selectNum[0]) <= Math.floor(deque.length / 2)) {
      deque.push(deque.shift());
      count++;
    } else if (deque.indexOf(selectNum[0]) > Math.floor(deque.length / 2)) {
      deque.unshift(deque.pop());
      count++;
    }
  }

  console.log(count);
});
