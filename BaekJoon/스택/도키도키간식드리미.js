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
  const queue = input[1].split(" ").map(Number);
  const stack = [];

  let min = 1;

  while (queue.length > 0) {
    if (queue[0] === min) {
      queue.shift();
      min++;
    } else if (stack.length > 0 && stack[stack.length - 1] === min) {
      stack.pop();
      min++;
    } else {
      stack.push(queue.shift());
    }
  }

  while (stack.length > 0) {
    if (stack[stack.length - 1] === min) {
      stack.pop();
      min++;
    } else {
      console.log("Sad");
      return;
    }
  }

  console.log("Nice");
});
