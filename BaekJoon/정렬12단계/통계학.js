const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const n = +input[0];
  const arr = [];
  const obj = {};
  let result = "";

  for (let i = 1; i <= n; i++) {
    arr[i - 1] = +input[i];
  }

  const mid = Math.floor(arr.length / 2);
  const sum = arr.reduce((acc, cur) => acc + cur, 0);
  const avg = Math.round(sum / arr.length);

  arr.sort((a, b) => a - b);
  arr.forEach((num) => {
    if (obj[num]) obj[num]++;
    else obj[num] = 1;
  });

  const maxCount = Math.max(...Object.values(obj));
  const max = arr[arr.length - 1];
  const min = arr[0];

  const newArr = Object.entries(obj)
    .filter(([_, value]) => value === maxCount)
    .sort((a, b) => +a[0] - +b[0]);

  result += avg + "\n";
  result += arr[mid] + "\n";
  result += newArr.length > 1 ? newArr[1][0] + "\n" : newArr[0][0] + "\n";
  result += max - min;

  console.log(result);
});
