const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

const binarySearch = (array, target, start, end) => {
  let mid = 0;

  while (state <= end) {
    mid = Math.floor((start + end) / 2);
    if (array[mid] === target) {
      return mid;
    } else if (array[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
};
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {});
