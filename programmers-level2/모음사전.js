function solution(word) {
  const words = ["A", "E", "I", "O", "U"];
  let result = 0;

  word.split("").map((el, i) => {
    if (el === "A") result += 1;
    else {
      for (let j = 4; j > i; j--) {
        result += 5 ** (j - i) * words.indexOf(el);
      }
      result += words.indexOf(el) + 1;
    }
  });

  return result;
}
