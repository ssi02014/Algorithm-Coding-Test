// 풀이 1
function solution(s) {
  const result = [0, 0];

  while (s.length > 1) {
    const convertedStr = s.replace(/0/g, () => {
      result[1]++; // 제거된 0의 개수 카운팅
      return "";
    });

    s = convertedStr.length.toString(2);
    result[0]++; // 변환 횟수 카운팅
  }

  return result;
}

// 풀이 2
function solution(s) {
  const result = [0, 0];

  while (s !== "1") {
    const step1 = s.replace(/0/g, "");
    const step2 = step1.length.toString(2);

    result[0]++;
    result[1] += s.length - step1.length;
    s = step2;
  }

  return result;
}
