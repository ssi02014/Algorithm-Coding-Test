const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const nums = input[0]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const result = [];

  // 중복된 값 건너뛰기
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    while (left < right) {
      sum = nums[i] + nums[left] + nums[right];
      if (sum < 0) left += 1;
      else if (sum > 0) right -= 1;
      else {
        result.push([nums[i], nums[left], nums[right]]);
        // skip
        while (left < right && nums[left] === nums[left + 1]) {
          left += 1;
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right -= 1;
        }
        left += 1;
        right -= 1;
      }
    }
  }
  console.log(result);
});
