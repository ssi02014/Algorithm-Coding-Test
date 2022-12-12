const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const ecology = {};
  let result = "";

  input.forEach((el) => {
    ecology[el] = (ecology[el] || 0) + 1;
  });

  Object.entries(ecology)
    .sort((a, b) => {
      if (a[0] < b[0]) return -1;
    })
    .forEach(([key, value]) => {
      const percent = ((value / input.length) * 100).toFixed(4);
      result += `${key} ${percent}\n`;
    });

  console.log(result);
});
