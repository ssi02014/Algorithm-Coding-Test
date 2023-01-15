const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  // 풀이
  const strList = input.slice(1);
  let result = "";

  const recursive = (str, count, start, end) => {
    if (start >= end) return [1, count];
    if (str[start] !== str[end]) return [0, count];
    else {
      return recursive(str, count + 1, start + 1, end - 1);
    }
  };
  strList.forEach((str) => {
    const [isPalindrome, count] = recursive(str, 1, 0, str.length - 1);
    result += `${isPalindrome} ${count}\n`;
  });

  console.log(result);
});
