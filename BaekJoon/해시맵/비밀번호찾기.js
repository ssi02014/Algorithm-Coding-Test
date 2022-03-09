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
  const savedSiteObj = {};
  let result = "";

  for (let i = 1; i <= n; i++) {
    const [site, pwd] = input[i].split(" ");
    savedSiteObj[site] = pwd;
  }

  for (let i = n + 1; i <= n + m; i++) {
    result += savedSiteObj[input[i]] + "\n";
  }
  console.log(result);
});
