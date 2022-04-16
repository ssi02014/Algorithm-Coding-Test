const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const list = input[1].split(" ").map(Number);
  const sortedList = [...list].sort((a, b) => a - b);
  let result = "";

  list.forEach((el) => {
    result += `${sortedList.indexOf(el)} `;
    sortedList[sortedList.indexOf(el)] = -1;
  });

  console.log(result);
});
