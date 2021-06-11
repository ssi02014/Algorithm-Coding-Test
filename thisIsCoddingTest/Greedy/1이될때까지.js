function solution(n, k) {
  let answer = n;
  let count = 0;

  while (true) {
    if (answer % k === 0) {
      answer = answer / k;
      count++;
    } else if (answer % k !== 0) {
      answer--;
      count++;
    }
    if (answer === 1) {
      break;
    }
  }
  return count;
}

console.log(solution(25, 5));
