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
