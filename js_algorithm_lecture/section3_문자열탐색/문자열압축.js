function solution(s) {
  let result = "";
  let count = 1;

  s += " ";

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      count++;
    } else {
      if (count === 1) result += s[i];
      else result += s[i] + count;

      count = 1;
    }
  }

  return result;
}

let str = "KKHSSSSSSSE";
console.log(solution(str));
