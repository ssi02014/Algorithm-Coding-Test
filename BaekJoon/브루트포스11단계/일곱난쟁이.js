const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const dwarf = [];
  let sum = 0;

  for (let i = 0; i < input.length; i++) {
    dwarf[i] = parseInt(input[i]);
    sum += dwarf[i];
  }

  dwarf.sort((a, b) => a - b);

  for (let i = 0; i < dwarf.length - 1; i++) {
    for (let j = i + 1; j < dwarf.length; j++) {
      if (sum - dwarf[i] - dwarf[j] === 100) {
        for (let k = 0; k < dwarf.length; k++) {
          if (k !== i && k !== j) console.log(dwarf[k]);
        }
        return;
      }
    }
  }
});
