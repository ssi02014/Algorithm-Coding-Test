const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let arr = input;
  let maxLength = 0;
  let result = "";

  arr.forEach((el) => {
    maxLength = Math.max(el.length, maxLength);
  });

  const newArr = arr.map((_, i) => {
    return arr[i].padEnd(maxLength, " ").split("");
  });

  for (let i = 0; i < maxLength; i++) {
    for (let j = 0; j < newArr.length; j++) {
      if (newArr[j][i] !== " ") {
        result += newArr[j][i];
      }
    }
  }

  console.log(result);
});

// 더 효율적
function solution2() {
  let arr = input;
  let maxLength = 0;
  let result = "";

  arr.forEach((el) => {
    maxLength = Math.max(el.length, maxLength);
  });

  for (let i = 0; i < maxLength; i++) {
    for (let j = 0; j < arr.length; j++) {
      // String.charAt은 없으면 빈 문자열을 반환 함!
      result += arr[j].charAt(i);
    }
  }

  console.log(result);
}
