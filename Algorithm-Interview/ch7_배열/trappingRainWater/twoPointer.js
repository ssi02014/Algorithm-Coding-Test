const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const height = input[0].split(" ").map(Number);
  let [left, right] = [0, height.length - 1];
  let [leftMax, rightMax] = [height[left], height[right]];
  let volumn = 0;

  while (left < right) {
    leftMax = Math.max(leftMax, height[left]);
    rightMax = Math.max(rightMax, height[right]);

    if (leftMax <= rightMax) {
      volumn += leftMax - height[left];
      left += 1;
    } else {
      volumn += rightMax - height[right];
      right -= 1;
    }
  }
  console.log(volumn);
});
