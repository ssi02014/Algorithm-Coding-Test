const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const str = input[0];
  let tempStr = "";
  let result = "";

  const getIsPalindrome = (str) => {
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== str[str.length - i - 1]) return false;
    }
    return true;
  };

  if (getIsPalindrome(str)) {
    console.log(str.length);
    return;
  }

  for (let i = 0; i < str.length; i++) {
    tempStr = str[i] + tempStr;

    if (getIsPalindrome(str + tempStr)) {
      result = str + tempStr;
      break;
    }
  }

  console.log(result.length);
});
