const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

const isDecimal = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const getDecimals = (num) => {
  const result = [];

  for (let i = 2; i <= num; i++) {
    if (isDecimal(i)) result.push(i);
  }

  return result;
};

const getMinDiffPartition = (decimals, curNum) => {
  const partition = [];
  let minDiff = Number.MAX_SAFE_INTEGER;
  let minDiffIdx = -1;

  for (let i = 0; i < decimals.length; i++) {
    for (let j = 0; j < decimals.length; j++) {
      if (decimals[i] + decimals[j] === curNum) {
        partition.push(`${decimals[i]} ${decimals[j]}`);

        if (minDiff > Math.abs(decimals[j] - decimals[i])) {
          minDiff = Math.abs(decimals[j] - decimals[i]);
          minDiffIdx++;
        }
      }
    }
  }

  return partition[minDiffIdx];
};

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const numbers = input.slice(1).map(Number);
  let result = "";

  numbers.forEach((curNum) => {
    const decimals = getDecimals(curNum);

    result += `${getMinDiffPartition(decimals, curNum)}\n`;
  });

  console.log(result);
});
