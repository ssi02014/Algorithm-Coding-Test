function solution(left, right) {
  let result = 0;

  for (let i = left; i <= right; i++) {
    findFactor(i).length % 2 === 0 ? (result += i) : (result -= i);
  }

  return result;
}

function findFactor(num) {
  const factors = [];

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) factors.push(i);
  }

  return factors;
}
