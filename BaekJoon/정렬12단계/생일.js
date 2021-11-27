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
  const list = [];

  for (let i = 1; i <= n; i++) {
    list[i - 1] = input[i].split(" ").map((el) => {
      if (isNaN(Number(el))) return el;
      return Number(el);
    });
  }

  list.sort((a, b) => {
    return a[3] - b[3] || a[2] - b[2] || a[1] - b[1];
  });

  console.log(list[list.length - 1][0]);
  console.log(list[0][0]);
});
