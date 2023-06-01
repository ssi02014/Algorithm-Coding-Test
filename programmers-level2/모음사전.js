// 수학적 풀이
function solution(word) {
  const words = ["A", "E", "I", "O", "U"];
  let result = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i] === "A") {
      result += 1;
      continue;
    }

    for (let j = 4; j > i; j--) {
      result += 5 ** (j - i) * words.indexOf(word[i]);
    }
    result += words.indexOf(word[i]) + 1;
  }

  return result;
}

// 완전 탐색1
function solution(word) {
  const vowels = ["A", "E", "I", "O", "U"];
  const result = [];

  const dfs = (str, length) => {
    if (str.length === length) {
      result.push(str);
      return;
    }
    vowels.forEach((vowel) => {
      dfs(str + vowel, length);
    });
  };

  for (let i = 1; i <= 5; i++) {
    dfs("", i);
  }

  return result.sort().indexOf(word) + 1;
}

// 완전 탐색2
function solution(word) {
  const dictionary = ["A", "E", "I", "O", "U"];
  let result = 0;
  let isValid = false;

  const dfs = (string) => {
    if (!isValid) {
      result++;

      if (string === word) {
        isValid = true;
        return;
      }

      if (string.length < 5) {
        dictionary.forEach((el) => dfs(string + el));
      }
    }
  };

  dfs("");

  return --result;
}
