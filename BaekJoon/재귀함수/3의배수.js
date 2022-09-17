const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const x = input[0];

  Number(x) < 10 ? recursion(x, 0) : recursion(x, 1);

  function recursion(str, count) {
    const sum = str.split("").reduce((acc, cur) => acc + Number(cur), 0);

    if (sum < 10) {
      if (sum % 3 === 0) {
        return console.log(`${count}\nYES`);
      }
      return console.log(`${count}\nNO`);
    }

    recursion(String(sum), count + 1);
  }
});
