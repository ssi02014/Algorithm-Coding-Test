function solution(num1, num2) {
  const strNum1 = String(num1);
  const strNum2 = String(num2);
  const obj = {};

  for (const el of strNum1) {
    obj[el] = (obj[el] || 0) + 1;
  }

  for (const el of strNum2) {
    if (!obj[el]) return false;
    obj[el]--;
  }
  return true;
}

console.log(solution(182, 281)); // true
console.log(solution(34, 14)); // false
console.log(solution(3589578, 5879385)); // true
console.log(solution(22, 222)); // false
