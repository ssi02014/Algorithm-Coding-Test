function solution(n) {
  const numList = Array.from({ length: n }, (_, idx) => idx + 1);
  let [left, right] = [0, 1];
  let sum = numList[left];
  let result = 0;

  while (left < right) {
    if (sum === n) {
      sum += numList[right++] - numList[left++];
      result++;
    } else if (sum < n) {
      sum += numList[right++];
    } else {
      sum -= numList[left++];
    }
  }

  return result;
}
