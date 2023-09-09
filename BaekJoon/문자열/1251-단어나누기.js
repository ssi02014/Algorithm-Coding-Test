const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const str = input[0].split("");
  const result = [];

  for (let i = 1; i <= str.length - 1; i++) {
    for (let j = i + 1; j < str.length; j++) {
      const first = str.slice(0, i).reverse().join("");
      const second = str.slice(i, j).reverse().join("");
      const third = str.slice(j).reverse().join("");

      result.push(first + second + third);
    }
  }
  result.sort();
  console.log(result[0]);
});
