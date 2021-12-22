/**
 * 가장 짧은 문자거리
    한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출
    력하는 프로그램을 작성하세요.
    ▣ 입력설명
    첫 번째 줄에 문자열 s와 문자 t가 주어진다. 문자열과 문자는 소문자로만 주어집니다.
    문자열의 길이는 100을 넘지 않는다.
    ▣ 출력설명
    첫 번째 줄에 각 문자열 s의 각 문자가 문자 t와 떨어진 거리를 순서대로 출력한다.
    ▣ 입력예제 1
    teachermode e
    ▣ 출력예제 1
    1 0 1 2 1 0 1 2 2 1 0
 */
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
