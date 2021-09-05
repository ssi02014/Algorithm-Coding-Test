const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const gears = input.slice(0, 4).map((el) => el.split("").map(Number));
  const rotationCount = parseInt(input[4]);
  let checkDirections = [];

  for (let i = 5; i < 5 + rotationCount; i++) {
    const [gearNumber, rotationDirection] = input[i].split(" ").map(Number);
    checkDirections = [0, 0, 0, 0];

    isCheck(gearNumber - 1, rotationDirection);
    rotate(checkDirections);
  }

  function isCheck(gearNumber, rotationDirection) {
    const prev = gearNumber - 1;
    const next = gearNumber + 1;

    checkDirections[gearNumber] = rotationDirection;

    if (prev >= 0 && !checkDirections[prev]) {
      if (gears[prev][2] !== gears[gearNumber][6]) {
        isCheck(prev, rotationDirection * -1);
      }
    }

    if (next <= 3 && !checkDirections[next]) {
      if (gears[next][6] !== gears[gearNumber][2]) {
        isCheck(next, rotationDirection * -1);
      }
    }
  }

  function rotate(checkDirections) {
    for (let i = 0; i < 4; i++) {
      if (checkDirections[i] === 1) {
        gears[i].unshift(gears[i].pop());
      } else if (checkDirections[i] === -1) {
        gears[i].push(gears[i].shift());
      }
    }
  }

  function calc() {
    let sum = 0;
    gears.map((el, i) => (sum += el[0] === 1 ? Math.pow(2, i) : 0));

    return sum;
  }

  console.log(calc());
});
