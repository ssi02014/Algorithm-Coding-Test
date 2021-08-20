const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const numSet = new Set();
  let [n, m] = input[0].split(" ");
  let status = 0;

  numSet.add(parseInt(n));

  while (true) {
    n = n
      .toString()
      .split("")
      .map((el) => parseInt(el) ** m)
      .reduce((a, b) => a + b);

    if (status === 0 && !numSet.has(n)) {
      numSet.add(n);
    } else if ((status === 0 || status === 1) && numSet.has(n)) {
      status = 1;
      numSet.delete(n);
    } else if (status === 1 && !numSet.has(n)) {
      break;
    }
  }

  console.log(numSet.size);
});
