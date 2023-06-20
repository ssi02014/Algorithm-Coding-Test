const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [n] = input[0].split(" ").map(Number);
  const brands = input.slice(1).map((el) => el.split(" ").map(Number));
  const sortedPackagePrice = [...brands].sort((a, b) => a[0] - b[0]);
  const sortedSinglePrice = [...brands].sort((a, b) => a[1] - b[1]);
  let origin = 0;

  let count = n;
  let price = 0;
  let tempPrice = 0;

  for (let i = 0; i < n; i++) {
    origin += sortedSinglePrice[0][1];
  }

  while (count > 6) {
    count -= 6;
    price += sortedPackagePrice[0][0];
  }

  while (count > 0) {
    count--;
    tempPrice += sortedSinglePrice[0][1];
  }

  if (sortedPackagePrice[0][0] < tempPrice) {
    price += sortedPackagePrice[0][0];
  } else {
    price += tempPrice;
  }

  console.log(origin > price ? price : origin);
});
