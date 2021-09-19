const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const t = parseInt(input[0]);
  const result = [];

  for (let i = 0; i < t; i++) {
    let [n, note1, m, note2] = input.splice(1, 5);

    note1 = note1
      .split(" ")
      .sort((a, b) => a - b)
      .map(Number);
    note2 = note2.split(" ").map(Number);

    note2.map((el) => {
      let flag = false;
      let first = 0;
      let last = note1.length - 1;

      while (first <= last) {
        const mid = Math.floor((first + last) / 2);

        if (el === note1[mid]) {
          flag = true;
          break;
        } else if (el < note1[mid]) last = mid - 1;
        else first = mid + 1;
      }

      if (flag) result.push(1);
      else result.push(0);
    });
  }

  console.log(result.join("\n"));
});
