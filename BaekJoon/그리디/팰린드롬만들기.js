const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const arr = input[0].split("").sort();
  const deduplicatedArr = [...new Set(arr)];
  const oddNumbers = [];
  const halfPalindrome = [];
  let centerWord = "";

  // 팰림드롬이 안되는 경우
  // 홀수 단어가 2개 이상이면 팰린드롬이 안된다.
  deduplicatedArr.forEach((item) => {
    const filteredArr = arr.filter((el) => item === el);

    if (filteredArr.length % 2 === 1) {
      oddNumbers.push(item);
    }
  });

  if (oddNumbers.length > 1) {
    return console.log("I'm Sorry Hansoo");
  }

  // 팰림드롬이 되는 경우
  deduplicatedArr.forEach((item) => {
    const filteredArr = arr.filter((el) => item === el);

    if (filteredArr.length % 2 === 1) {
      centerWord = filteredArr[0];
    }

    for (let i = 0; i < (filteredArr.length - 1) / 2; i++) {
      halfPalindrome.push(filteredArr[i]);
    }
  });

  console.log(
    `${halfPalindrome.join("")}${centerWord}${halfPalindrome
      .reverse()
      .join("")}`
  );
});

/**
 * (풀이)
 *  홀수 단어가 2개 이상이면 팰린드롬이 안된다
 */
