function solution(n, m, section) {
  let last = 0;
  let result = 0;

  section.forEach((el) => {
    if (el > last) {
      result++;
      last = el + m - 1;
    }
  });
  return result;
}
