const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const N = parseInt(input[0]);
  let count = 0;

  for (let i = 0; i <= N; i++) {
    for (let j = 0; j < 60; j++) {
      for (let k = 0; k < 60; k++) {
        // let time = `${i}:${j}:${k}`;
        // if (time.match(/[3]/g)) {
        //   count++;
        // }

        if (
          i % 10 === 3 ||
          Math.floor(j / 10) === 3 ||
          j % 10 === 3 ||
          Math.floor(k / 10) === 3 ||
          k % 10 === 3
        ) {
          count++;
        }
      }
    }
  }

  console.log(count);
});
