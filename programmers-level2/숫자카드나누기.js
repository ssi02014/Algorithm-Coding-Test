const gcd = (a, b) => {
  return b ? gcd(b, a % b) : a;
};

const getCumulativeGcd = (arr) => {
  return arr.reduce((acc, cur, i) => {
    if (!i) return cur;
    return gcd(acc, cur);
  });
};

function solution(arrayA, arrayB) {
  const gcd1 = getCumulativeGcd(arrayA);
  const gcd2 = getCumulativeGcd(arrayB);
  const isValid1 = gcd1 > 1 && arrayB.every((el) => el % gcd1 !== 0);
  const isValid2 = gcd2 > 1 && arrayA.every((el) => el % gcd2 !== 0);
  let result = 0;

  if (isValid1) {
    result = Math.max(result, gcd1);
  }
  if (isValid2) {
    result = Math.max(result, gcd2);
  }

  return result;
}
