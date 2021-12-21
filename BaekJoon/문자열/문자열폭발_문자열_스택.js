const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const str = input[0];
  const c4 = input[1];
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);

    if (stack.length >= c4.length) {
      const temp = stack.slice(stack.length - c4.length).join("");

      if (temp === c4) {
        let count = 0;

        while (count < c4.length) {
          stack.pop();
          count++;
        }
      }
    }
  }
  stack.length ? console.log(stack.join("")) : console.log("FRULA");
});
