const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const n = +input[0];
  const list = [];
  let result = "";

  for (let i = 1; i <= n; i++) {
    list[i - 1] = input[i];
  }

  const obj = list.map((serial) => {
    let sum = 0;
    for (let i = 0; i < serial.length; i++) {
      if (!isNaN(+serial[i])) sum += +serial[i];
    }
    return {
      data: serial,
      length: serial.length,
      sum: sum,
    };
  });

  obj
    .sort((a, b) => {
      if (a.length < b.length) return -1;
      else if (a.length === b.length) {
        if (a.sum < b.sum) return -1;
        else if (a.sum === b.sum) {
          if (a.data < b.data) return -1;
        }
      }
    })
    .forEach((el) => (result += el.data + "\n"));

  console.log(result);
});
