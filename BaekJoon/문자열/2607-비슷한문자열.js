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
  const firstWords = input[1].split("");
  const comparedArr = input.slice(2);

  const firstObj = {};
  let result = 0;

  firstWords.forEach((char) => {
    firstObj[char] = (firstObj[char] || 0) + 1;
  });

  for (const word of comparedArr) {
    const copyWord = [...firstWords];
    let sameCount = 0;

    for (let i = 0; i < word.length; i++) {
      const idx = copyWord.indexOf(word[i]);

      if (idx !== -1) {
        sameCount++;
        copyWord.splice(idx, 1);
      }
    }

    // 글자 길이 같음
    if (word.length === firstWords.length) {
      if (
        sameCount === firstWords.length ||
        sameCount + 1 === firstWords.length
      ) {
        result++;
      }
    }

    // 1글자 김
    if (word.length - 1 === firstWords.length) {
      if (sameCount === firstWords.length) {
        result++;
      }
    }

    // 1글자 짧음
    if (word.length + 1 === firstWords.length) {
      if (sameCount + 1 === firstWords.length) {
        result++;
      }
    }
  }

  console.log(result);
});
