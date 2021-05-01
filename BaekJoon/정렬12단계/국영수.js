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
  const students = [];

  for (let i = 1; i <= N; i++) {
    students[i - 1] = input[i].split(" ").map((el, i) => {
      if (i > 0) {
        return parseInt(el);
      } else {
        return el;
      }
    });
  }

  students.sort((a, b) => {
    if (a[1] < b[1]) return 1;
    else if (a[1] > b[1]) return -1;
    else {
      if (a[2] > b[2]) return 1;
      else if (a[2] < b[2]) return -1;
      else {
        if (a[3] < b[3]) return 1;
        else if (a[3] > b[3]) return -1;
        else {
          if (a[0] > b[0]) return 1;
          else if (a[0] < b[0]) return -1;
          else return 0;
        }
      }
    }
  });

  console.log(students.map((el) => el[0]).join("\n"));
});
