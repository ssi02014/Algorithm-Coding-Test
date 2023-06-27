const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [n, d, k, c] = input[0].split(" ").map(Number);
  const arr = input.slice(1).map(Number);
  const map = new Map();
  let [left, right] = [0, k - 1];
  let result = -999999;

  arr
    .slice(0, k)
    .map(Number)
    .forEach((cur) => {
      map.set(cur, (map.get(cur) || 0) + 1);
    });

  map.set(c, (map.get(c) || 0) + 1);

  while (left < n) {
    result = Math.max(result, map.size);

    map.set(arr[left], map.get(arr[left]) - 1);

    if (!map.get(arr[left])) {
      map.delete(arr[left]);
    }

    left++;
    right++;

    map.set(arr[right % n], (map.get(arr[right % n]) || 0) + 1);
  }

  console.log(result);
});
