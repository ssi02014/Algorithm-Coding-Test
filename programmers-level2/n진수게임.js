function solution(n, t, m, p) {
  let result = "";
  let numbers = "";
  let idx = p - 1;

  for (let i = 0; i <= m * t; i++) {
    numbers += i.toString(n).toUpperCase();
  }

  for (let i = 0; i < t; i++) {
    result += numbers[idx];
    idx += m;
  }

  return result;
}
