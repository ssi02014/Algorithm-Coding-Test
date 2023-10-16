function solution(arr) {
  // 최대 공약수
  const gcd = (a, b) => (b ? gcd(b, a % b) : a);

  // 최소 공배수
  const lcm = (a, b) => (a * b) / gcd(a, b);

  return arr.reduce((a, b) => lcm(a, b), 1);
}
