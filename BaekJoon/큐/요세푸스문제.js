const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [N, K] = input[0].split(" ").map(Number);
  const queue = Array.from({ length: N }, (_, i) => i + 1);
  const result = [];

  while (queue.length) {
    for (let i = 0; i < K; i++) {
      queue.push(queue.shift());
    }
    result.push(queue.pop());
  }

  console.log(`<${result.join(", ")}>`);
});
