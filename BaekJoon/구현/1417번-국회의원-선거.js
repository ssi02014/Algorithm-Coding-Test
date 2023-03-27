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
  const arr = input.slice(2).map(Number);
  let dasom = +input[1];
  let max = Math.max(...arr);
  let result = 0;

  if (!arr.length || dasom > max) {
    return console.log(0);
  }

  while (dasom <= max) {
    const idx = arr.indexOf(max);

    dasom++;
    arr[idx]--;
    result++;

    max = Math.max(...arr);
  }

  console.log(result);
});
