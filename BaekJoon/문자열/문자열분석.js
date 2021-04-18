const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  for (let i = 0; i < input.length; i++) {
    let str = input[i].split("");
    let result = [0, 0, 0, 0];

    str.map((el) => {
      if (el.match(/^[a-z]/)) {
        result[0]++;
      } else if (el.match(/^[A-Z]/)) {
        result[1]++;
      } else if (el.match(/^[0-9]/)) {
        result[2]++;
      } else {
        result[3]++;
      }
    });
    console.log(result.join(" "));
  }
});
