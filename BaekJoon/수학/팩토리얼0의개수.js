const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let n = Number(input[0]);
  const mul5 = Math.floor(n / 5);
  const mul25 = Math.floor(n / 25);
  const mul125 = Math.floor(n / 125);

  console.log(mul5 + mul25 + mul125);

  // let count = 0;

  // while (n >= 5) {
  //   count += n / 5;
  //   n /= 5;
  // }
  // console.log(count);
});
