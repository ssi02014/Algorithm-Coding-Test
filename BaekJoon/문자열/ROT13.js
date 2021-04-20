const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const str = input[0].split("");
  let ascii = 0;
  let result = "";

  for (let i = 0; i < str.length; i++) {
    ascii = str[i].charCodeAt();

    if (ascii === 32) {
      result += " ";
    } else if (ascii >= 32 && ascii < 58) {
      result += String.fromCharCode(ascii);
    } else if (ascii > 90) {
      result += String.fromCharCode(((ascii + 13 - 97) % 26) + 97);
    } else {
      result += String.fromCharCode(((ascii + 13 - 65) % 26) + 65);
    }
  }
  console.log(result);
});
