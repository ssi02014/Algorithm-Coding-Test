function solution(a, b) {
  const gcd = getGreatestCommonDivisor(a, b);
  const denominator = gcd > 1 ? b / gcd : b;

  if (isFiniteDecimal(denominator)) {
    return 1;
  }
  return 2;
}

function getGreatestCommonDivisor(num1, num2) {
  const remainder = num1 % num2;
  return num2 === 0 ? num1 : getGreatestCommonDivisor(num2, remainder);
}

const isFiniteDecimal = (num) => {
  while (num % 2 === 0) {
    num /= 2;
  }

  while (num % 5 === 0) {
    num /= 5;
  }

  if (num === 1) return true;
  return false;
};
