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
  const times = [];
  const arr = [];
  let result = 0;
  let classRoom = 0;

  for (let i = 1; i <= n; i++) {
    const [start, end] = input[i].split(" ").map(Number);
    arr.push({ time: start, start: 1 });
    arr.push({ time: end, start: -1 });
  }

  arr.sort((a, b) => a.time - b.time || a.start - b.start);

  arr.forEach((el) => {
    if (el.start === -1) classRoom--;
    else classRoom++;
    console.log(result, classRoom);
    result = Math.max(result, classRoom);
  });

  console.log(result);
});
