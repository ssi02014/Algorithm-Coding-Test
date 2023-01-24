const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const cumulativeSumList = input[1].split(" ").reduce((acc, cur, i) => {
    acc[i] = (acc[i - 1] || 0) + +cur;
    return acc;
  }, []);
  const rangeList = input.slice(3).map((el) => el.split(" ").map(Number));
  let result = "";

  rangeList.forEach((range) => {
    const [start, end] = range;
    const rangeSum =
      start === 1
        ? cumulativeSumList[end - 1]
        : cumulativeSumList[end - 1] - cumulativeSumList[start - 2];

    result += `${rangeSum}\n`;
  });

  console.log(result);
});
