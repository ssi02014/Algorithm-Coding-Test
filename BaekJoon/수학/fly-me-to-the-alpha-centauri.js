const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const t = +input[0];
  const moves = input.slice(1, t + 1).map((el) => el.split(" ").map(Number));
  const result = [];

  moves.forEach((move) => {
    const [x, y] = move;
    const moveLength = y - x;
    const sqrt = Math.sqrt(moveLength);
    const isPerfectSquare = moveLength % sqrt === 0;
    let count = isPerfectSquare ? sqrt * 2 - 1 : sqrt * 2;

    if (sqrt * (sqrt + 1) < moveLength) count++;

    result.push(Math.floor(count));
  });

  console.log(result.join("\n"));
});

// console.log(moveLength, count, sqrt, pow, sqrt * (sqrt + 1));
/*
1 = 1 => 1 
2 = 11 => 2
3 = 111 => 3 
4 = 121 => 3
5 = 1211 => 4
6 = 1221 => 4 
7 = 12211 => 5
8 = 12221 => 5
9 = 12321 => 5 
10 = 123211 => 6
11 = 123221 => 6
12 = 123321 => 6
13 = 1233211 => 7
14 = 1233221 => 7
15 = 1233321 => 7
16 = 1234321 => 7
17 = 12343211 => 8
18 = 12343221 => 8
19 = 12343321 => 8
20 = 12344321 => 8
21 = 123443211 => 9
...
*/
