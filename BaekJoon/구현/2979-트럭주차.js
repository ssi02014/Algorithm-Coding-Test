const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [a, b, c] = input[0].split(" ").map(Number);
  const list = input.slice(1).map((el) => el.split(" ").map(Number));

  const max = Math.max(...list.flat());
  const checkList = Array(max).fill(0);

  let result = 0;

  for (let i = 0; i < list.length; i++) {
    for (let j = list[i][0]; j < list[i][1]; j++) {
      checkList[j]++;
    }
  }

  checkList.forEach((el) => {
    if (el === 1) {
      result += a * el;
    } else if (el === 2) {
      result += b * el;
    } else {
      result += c * el;
    }
  });
  console.log(result);
});
