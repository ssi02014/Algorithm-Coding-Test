function solution(n) {
  let [i, j] = [1, 1];
  let tempValue = 0;
  let result = 0;

  while (i <= n + 1) {
    if (tempValue < n) {
      tempValue += i++;
      continue;
    }
    if (tempValue === n) {
      result++;
    }
    tempValue -= j++;
  }
  return result;
}
