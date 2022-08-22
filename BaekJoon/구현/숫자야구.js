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
  const questions = input.slice(1);
  let answer = 0;

  for (let i = 123; i < 988; i++) {
    const num = String(i);

    if (num[1] === "0" || num[2] === "0") continue;
    if (num[0] === num[1] || num[1] === num[2] || num[0] === num[2]) continue;

    if (compareNumber(num)) {
      answer++;
    }
  }

  console.log(answer);

  function compareNumber(num) {
    for (let i = 0; i < n; i++) {
      const [guessedNumber, strike, ball] = questions[i].split(" ");
      let checkStrike = 0;
      let checkBall = 0;

      for (let j = 0; j < 3; j++) {
        for (let k = 0; k < 3; k++) {
          if (j === k && guessedNumber[j] === num[k]) {
            checkStrike++;
          }

          if (j !== k && guessedNumber[j] === num[k]) {
            checkBall++;
          }
        }
      }

      if (+strike !== checkStrike || +ball !== checkBall) {
        return false;
      }
    }
    return true;
  }
});
