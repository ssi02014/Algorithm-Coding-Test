function power(num1, num2) {
  if (num2 === 0) return 1;
  return 2 * power(num1, num2 - 1);
}

console.log(power(2, 0)); // 1
console.log(power(2, 2)); // 4
console.log(power(2, 4)); // 16
