const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let [N, M] = input[0].split(" ").map(Number);
  // let num = 100001; //임의의 수

  // function bfs(a, count) {
  //   if (a > M) return;
  //   if (a === M) num = Math.min(num, count);

  //   bfs(a * 2, count + 1);
  //   bfs(a * 10 + 1, count + 1);
  // }

  // bfs(N, 1);

  // if (num === 100001) console.log(-1);
  // else console.log(num);

  let count = 0;

  while (1) {
    if (N > M) {
      console.log(-1);
      break;
    }
    if (N === M) {
      count++;
      console.log(count);
      break;
    }
    if (M % 10 === 1) {
      M--;
      M = M / 10;
    } else if (M % 2 === 0) {
      M = M / 2;
    } else {
      console.log(-1);
      break;
    }
    count++;
  }
});
