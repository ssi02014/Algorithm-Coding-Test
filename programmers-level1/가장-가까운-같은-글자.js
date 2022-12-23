function solution(s) {
  const obj = {};

  return s.split("").map((char, i) => {
    const distance = obj[char] ? i - Math.max(...obj[char]) : -1;

    obj[char] = obj[char] ? [...obj[char], i] : [i];
    return distance;
  });
}
