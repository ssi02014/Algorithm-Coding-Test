function solution(s) {
  const arr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let result = "";
  let str = "";

  s.split("").forEach((el) => {
    if (isNaN(el)) {
      str += el;

      if (arr.includes(str)) {
        result += arr.indexOf(str);
        str = "";
      }
    } else {
      result += el;
    }
  });

  return Number(result);
}
