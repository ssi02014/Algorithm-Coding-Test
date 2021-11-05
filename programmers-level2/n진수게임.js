function solution(n, t, m, p) {
  let result = "";
  let numbers = [];
  let count = 0;
  let idx = p - 1;

  for (let i = 0; i <= m * t; i++) {
    numbers[i] = i.toString(n).toUpperCase();
  }

  numbers = numbers.join("");

  while (count !== t) {
    result += numbers[idx];
    idx += m;
    count++;
  }

  return result;
}
