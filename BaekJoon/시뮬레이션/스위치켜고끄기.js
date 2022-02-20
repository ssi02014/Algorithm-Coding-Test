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
  const switchArr = input[1].split(" ").map(Number);
  const studentCount = +input[2];
  let result = "";

  for (let i = 3; i < studentCount + 3; i++) {
    const [sex, num] = input[i].split(" ").map(Number);

    if (sex === 1) {
      for (let i = num; i <= n; i += num) {
        switchArr[i - 1] = toggle(switchArr[i - 1]);
      }
    } else {
      const idx = num - 1;
      let range = 1;
      let count = 0;

      while (switchArr[idx + range] === switchArr[idx - range]) {
        count++;
        range++;
      }

      switchArr[idx] = toggle(switchArr[idx]);

      while (count) {
        switchArr[idx + count] = toggle(switchArr[idx + count]);
        switchArr[idx - count] = toggle(switchArr[idx - count]);
        count--;
      }
    }
  }

  for (let i = 1; i <= n; i++) {
    result += switchArr[i - 1] + " ";
    if (i % 20 === 0) result += "\n";
  }

  console.log(result); // 결과 출력

  function toggle(value) {
    if (value) return 0;
    return 1;
  }
});
