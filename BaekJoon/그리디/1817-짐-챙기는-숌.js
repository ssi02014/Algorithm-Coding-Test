const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [n, m] = input[0].split(" ").map(Number);

  if (!n) return console.log(0);

  const books = input[1].split(" ").map(Number);
  let temp = 0;
  let result = 1;

  books.forEach((book) => {
    if (temp + book <= m) {
      temp += book;
    } else {
      result++;
      temp = book;
    }
  });

  console.log(result);
});
