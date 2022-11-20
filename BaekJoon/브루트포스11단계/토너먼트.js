const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let [biggerNum, smallerNum, t] = input[0]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  let tournament = Array.from({ length: t }, (_, i) => i + 1);
  let result = 1;

  const isBattle = (curIdx, nextIdx) => {
    return (
      tournament[curIdx] === biggerNum && tournament[nextIdx] === smallerNum
    );
  };

  const getNextStage = (length) => {
    return Array.from({ length: length }, (_, i) => i + 1);
  };

  while (tournament.length > 1) {
    const halfTournamentLength = Math.round(tournament.length / 2);

    for (let i = 0; i <= tournament.length; i += 2) {
      if (isBattle(i, i + 1)) return console.log(result);
    }

    result++;
    tournament = getNextStage(halfTournamentLength);

    biggerNum = Math.round(biggerNum / 2);
    smallerNum = Math.round(smallerNum / 2);
  }

  console.log(-1);
});

// refactor
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const input = [];

// rl.on("line", function (line) {
//   input.push(line);
// }).on("close", function () {
//   let [t, kim, lim] = input[0].split(" ").map(Number);
//   let result = 0;

//   while (kim !== lim) {
//     kim -= Math.floor(kim / 2);
//     lim -= Math.floor(lim / 2);

//     result++;
//   }

//   console.log(result);
// });
