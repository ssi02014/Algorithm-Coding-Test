const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [n, k] = input[0].split(" ").map(Number);
  const countryList = [];
  let result = 0;

  for (let i = 1; i <= n; i++) {
    countryList[i - 1] = input[i].split(" ").map(Number);
  }

  countryList.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < n; i++) {
    const compareCountry = countryList[i];
    const selectCountry = countryList[k - 1];

    if (i === k - 1) continue;

    if (compareCountry[1] > selectCountry[1]) result++;
    else if (compareCountry[1] === selectCountry[1]) {
      if (compareCountry[2] > selectCountry[2]) result++;
      else if (compareCountry[2] === selectCountry[2]) {
        if (compareCountry[3] > selectCountry[3]) result++;
      }
    }
  }

  console.log(result + 1);
});
