function solution(s) {
  const obj = {};

  return s.split("").map((char, i) => {
    const distance = obj[char] ? i + 1 - obj[char] : -1;

    obj[char] = obj[char] ? Math.max(obj[char], i + 1) : i + 1;
    return distance;
  });
}
