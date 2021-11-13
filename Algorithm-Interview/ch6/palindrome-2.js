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
  const reg = /[^a-z]/g;
  const transformStr = str.toLowerCase().replace(reg, "");
  let reverseStr = "";

  //join(), reverse() 이용해서도 가능
  for (let i = transformStr.length - 1; i >= 0; i--) {
    reverseStr += transformStr[i];
  }

  console.log(transformStr === reverseStr);
});
