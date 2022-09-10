const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

const moves = {
  R: [0, 1],
  L: [0, -1],
  B: [1, 0],
  T: [-1, 0],
  RT: [-1, 1],
  LT: [-1, -1],
  RB: [1, 1],
  LB: [1, -1],
};

const columPosition = {
  A: 0,
  B: 1,
  C: 2,
  D: 3,
  E: 4,
  F: 5,
  G: 6,
  H: 7,
};

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [king, stone, n] = input[0].split(" ");

  let [kRow, kColumn] = findPosition(king);
  let [sRow, sColumn] = findPosition(stone);

  for (let i = 1; i <= Number(n); i++) {
    const move = input[i];
    const [dx, dy] = moves[move];

    if (!isValid(kRow + dx, kColumn + dy)) continue;

    if (kRow + dx === sRow && kColumn + dy === sColumn) {
      if (!isValid(sRow + dx, sColumn + dy)) continue;
      sRow += dx;
      sColumn += dy;
    }

    kRow += dx;
    kColumn += dy;
  }

  console.log(getOriginalPosition(kColumn, kRow));
  console.log(getOriginalPosition(sColumn, sRow));
});

function findPosition(position) {
  const [column, row] = position.split("");
  return [8 - row, columPosition[column]];
}

function getOriginalPosition(column, row) {
  let resultColumn = "";

  for (let key in columPosition) {
    if (columPosition[key] === column) {
      resultColumn = key;
      break;
    }
  }
  return `${resultColumn}${8 - row}`;
}

function isValid(x, y) {
  if (x > 7 || y > 7 || x < 0 || y < 0) return false;
  return true;
}
