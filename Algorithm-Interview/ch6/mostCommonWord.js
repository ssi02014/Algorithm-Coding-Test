const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const reg = /[,.]/g;
  const paragraph = input[0].toLowerCase().replace(reg, "").split(" ");
  const banned = input[1].split(" ");
  const countObj = {};
  let result = paragraph[0];

  paragraph.map((el) => {
    if (!banned.includes(el)) {
      if (countObj[el]) {
        countObj[el] += 1;
        if (countObj[result] < countObj[el]) result = el;
      } else {
        countObj[el] = 1;
      }
    }
  });
  console.log(result);
});
