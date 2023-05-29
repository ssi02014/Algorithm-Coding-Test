const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const obj = {};
  let result = "";

  input
    .slice(1)
    .map((file) => file.split("."))
    .forEach((el) => (obj[el[1]] = (obj[el[1]] || 0) + 1));

  Object.entries(obj)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach((entry) => {
      const [extension, count] = entry;

      result += `${extension} ${count}\n`;
    });

  console.log(result);
});
