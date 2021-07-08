const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let [selectMonth, selectDate] = input[0].split(" ").map(Number);
  const Months = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  for (let i = 1; i < selectMonth; i++) {
    selectDate += Months[i];
  }

  console.log(days[selectDate % 7]);
});
