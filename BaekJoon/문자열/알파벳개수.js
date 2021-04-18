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

  let result = [];

  for (let i = 0; i < 26; i++) {
    result.push(0);
  }

  str.map((el) => {
    result[el.charCodeAt() - 97]++;
  });

  console.log(result.join(" "));
});
