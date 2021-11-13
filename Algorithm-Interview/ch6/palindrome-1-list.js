const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  // 팰린드롬: 앞뒤가 똑같은 단어나 문장으로, 뒤집어도 같은 말이 되는 단어 또는 문장
  const str = input[0];
  const arr = [];
  const reg = /[a-z]/;
  let result = true;

  for (let i = 0; i < str.length; i++) {
    let lowerChar = str[i].toLowerCase();

    if (lowerChar.match(reg)) arr.push(lowerChar);
  }

  while (arr.length > 1) {
    if (arr.shift() !== arr.pop()) {
      result = false;
    }
  }

  console.log(result);
});
