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
  const cardList = [];

  let prevIndex = 0;
  let lastIndex = N - 1;

  for (let i = 1; i <= N; i++) {
    cardList.push(i);
  }

  for (let i = N; i > 1; i--) {
    prevIndex++;
    cardList[lastIndex + 1] = cardList[prevIndex];
    prevIndex++;
    lastIndex++;
  }

  console.log(cardList.pop());
});
