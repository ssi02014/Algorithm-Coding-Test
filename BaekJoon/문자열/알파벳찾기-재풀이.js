const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let str = input[0].split("");
  let result = [];

  for (let i = 0; i < 26; i++) {
    result.push(-1);
  }

  str.map((el) => {
    result[el.charCodeAt() - 97] = str.indexOf(el);
  });

  console.log(result.join(" "));
});
