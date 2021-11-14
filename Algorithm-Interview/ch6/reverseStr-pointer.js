const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let arr = input[0].split("");

  let [left, right] = [0, arr.length - 1];
  while (left < right) {
    swap(arr, left, right);
    left++;
    right--;
  }
  console.log(arr);
});

function swap(arr, left, right) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
  return arr;
}
