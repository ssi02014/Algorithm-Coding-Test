function solution(s, t) {
  const result = Array(s.length - 1).fill(Number.MAX_SAFE_INTEGER);

  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) {
      result[i] = 0;
      continue;
    }

    for (let j = 0; j < s.length; j++) {
      if (s[j] === t) {
        if (i > j) result[i] = Math.min(result[i], i - j);
        else result[i] = Math.min(result[i], j - i);
      }
    }
  }

  return result;
}

function lectureSolution(s, t) {
  const result = Array(s.length - 1).fill(0);
  let temp = Number.MAX_SAFE_INTEGER;

  // left -> right
  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) temp = 0;
    else temp += 1;

    result[i] = temp;
  }

  temp = Number.MAX_SAFE_INTEGER;

  // right -> left
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) temp = 0;
    else temp += 1;

    result[i] = Math.min(result[i], temp);
  }
  return result;
}

let str = "teachermode";
console.log(lectureSolution(str, "e"));
