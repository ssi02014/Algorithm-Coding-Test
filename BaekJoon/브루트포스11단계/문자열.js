const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [s1, s2] = input[0].split(" ");
  const result = [];

  for (let i = 0; i <= s2.length - s1.length; i++) {
    let count = 0;

    for (let j = 0; j < s1.length; j++) {
      if (s1[j] !== s2[j + i]) count++;
    }
    result.push(count);
  }

  console.log(Math.min(...result));
});
