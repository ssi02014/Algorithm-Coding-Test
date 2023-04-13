const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const times = [300, 60, 10];
  const result = [0, 0, 0];

  let N = parseInt(input[0]);

  times.forEach((time, i) => {
    if (time <= N) {
      result[i] = Math.floor(N / time);
      N = N % time;
    }
  });

  if (N > 0) console.log(-1);
  else console.log(result.join(" "));
});
