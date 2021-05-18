const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const str = input[1];

  let document = input[0];
  let count = 0;

  while (true) {
    if (document.indexOf(str) !== -1) {
      document = document.replace(str, "0");
      count++;
    } else break;
  }

  console.log(count);
});
