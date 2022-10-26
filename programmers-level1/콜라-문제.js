function solution(a, b, n) {
  let result = 0;

  while (n >= a) {
    const remain = n % a;

    n = Math.floor(n / a) * b;
    result += n;
    n += remain;
  }

  return result;
}
