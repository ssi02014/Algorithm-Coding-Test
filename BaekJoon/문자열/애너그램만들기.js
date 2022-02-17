const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [str1, str2] = input;
  const check1 = Array.from(Array(26).fill(0));
  const check2 = Array.from(Array(26).fill(0));
  let result = 0;

  for (let i = 0; i < str1.length; i++) {
    check1[str1.charCodeAt(i) - 97]++;
  }
  for (let i = 0; i < str2.length; i++) {
    check2[str2.charCodeAt(i) - 97]++;
  }
  for (let i = 0; i < 26; i++) {
    const temp = check1[i] - check2[i];
    temp > 0 ? (result += temp) : (result += -temp);
  }

  console.log(result);
});
