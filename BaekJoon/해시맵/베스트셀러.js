const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const N = parseInt(input[0]);
  const saleBookList = {};
  const result = [];

  for (let i = 1; i < N + 1; i++) {
    const saleBook = input[i];

    if (!saleBookList[saleBook]) saleBookList[saleBook] = 1;
    else saleBookList[saleBook]++;
  }

  const maxSaleCount = Math.max(...Object.values(saleBookList));
  const saleBookListKey = Object.keys(saleBookList);

  for (let i = 0; i < saleBookListKey.length; i++) {
    if (saleBookList[saleBookListKey[i]] === maxSaleCount) {
      result.push(saleBookListKey[i]);
    }
  }

  console.log(result.sort()[0]);
});
