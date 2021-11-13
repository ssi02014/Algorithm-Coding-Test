const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const unheardSeen = {};
  let result = "";
  let count = 0;

  for (let i = 1; i < input.length; i++) {
    unheardSeen[input[i]] = unheardSeen[input[i]]
      ? (unheardSeen[input[i]] += 1)
      : 1;
  }

  Object.keys(unheardSeen)
    .sort()
    .map((el) => {
      if (unheardSeen[el] > 1) {
        count++;
        result += el + "\n";
      }
    });

  console.log(count + "\n" + result);
});
