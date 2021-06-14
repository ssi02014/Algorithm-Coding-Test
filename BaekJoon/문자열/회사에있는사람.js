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
  const personCompany = {};
  const result = [];

  for (let i = 1; i <= N; i++) {
    const [name, access] = input[i].split(" ");

    if (access === "enter") personCompany[name] = true;
    else personCompany[name] = false;
  }

  for (let key in personCompany) {
    if (personCompany[key]) result.push(key);
  }

  console.log(result.sort().reverse().join("\n"));
});
