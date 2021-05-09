const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const N = input[0].split("");
  const cnt = new Array(10).fill(0);

  N.map((el) => {
    if (el === "9") cnt[6]++;
    else cnt[el]++;
  });

  cnt[6] = Math.round(cnt[6] / 2);

  console.log(Math.max(...cnt));
});
