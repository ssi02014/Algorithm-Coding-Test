function solution(babbling) {
  const pronunciations = ["aya", "ye", "woo", "ma"];
  let result = 0;

  babbling.forEach((el) => {
    let curStr = el;

    pronunciations.forEach((pronunciation) => {
      curStr = curStr.replace(pronunciation + pronunciation, "z");
    });

    pronunciations.forEach((pronunciation) => {
      while (curStr.includes(pronunciation)) {
        curStr = curStr.replace(pronunciation, "");
      }
    });

    if (!curStr.length) result++;
  });

  return result;
}
