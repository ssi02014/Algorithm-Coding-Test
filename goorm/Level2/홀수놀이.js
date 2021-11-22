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
  let num = 1;
  let length = 1;
  let result = 0;

  for (let i = 1; i <= n; i++) {
    const temp = [];

    while (temp.length !== length) {
      if (i === 1) temp.push(1);
      else temp.push(num);

      num += 2;
    }
    length += 2;
    list.push(temp);
  }

  result = list[list.length - 1].slice(-1 - 2).reduce((acc, cur) => acc + cur);

  console.log(result);
});
