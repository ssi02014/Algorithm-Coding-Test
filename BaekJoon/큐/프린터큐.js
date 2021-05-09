const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const testCase = parseInt(input.shift());

  for (let i = 0; i < testCase * 2; i += 2) {
    const [N, M] = input[i].split(" ").map(Number);
    const importance = input[i + 1].split(" ").map(Number);
    const queue = [];

    let count = 0;
    let result = 0;

    for (let j = 0; j < N; j++) {
      queue.push(j);
    }

    while (queue.length !== 0) {
      const maxNum = Math.max(...importance);

      if (importance[0] < maxNum) {
        importance.push(importance.shift());
        queue.push(queue.shift());
      } else {
        count++;

        importance.shift();
        result = queue.shift();

        if (result === M) {
          console.log(count);
          break;
        }
      }
    }
  }
});
