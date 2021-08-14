const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const n = parseInt(input[0]);
  const cards = [];
  const map = new Map();

  for (let i = 1; i <= n; i++) {
    cards[i - 1] = BigInt(input[i]);
  }

  const result = cards.reduce((max, cur) => {
    let currentCard = (map.get(cur) || 0) + 1;
    let maxCard = map.get(max) || 0;
    map.set(cur, currentCard);

    if (currentCard > maxCard) {
      max = cur;
    } else if (currentCard === maxCard) {
      cur < max ? (max = cur) : max;
    }
    return max;
  }, BigInt(0));

  console.log(result.toString());
});
