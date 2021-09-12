//최대공약수 구하기

//greatestCommonDivisior
function gcd(a, b) {
  return b ? gcd(b, a % b) : a;
}

//최소공배수 구하기
//leastCommonMultiple
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

console.log(gcd(3, 6)); //3
console.log(lcm(12, 32)); //96
