const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const n = +input[0];
  const brokenButtons = input[2]?.split(" ") || [];
  let minCount = Math.abs(100 - n);

  for (let i = 0; i <= 1000000; i++) {
    const channel = `${i}`;

    for (let j = 0; j < channel.length; j++) {
      const button = channel[j];
      const isValidButton = brokenButtons.includes(button);

      if (isValidButton) break;
      if (j === channel.length - 1) {
        const count = Math.abs(+channel - n) + channel.length;

        minCount = Math.min(minCount, count);
      }
    }
  }

  console.log(minCount);
});
