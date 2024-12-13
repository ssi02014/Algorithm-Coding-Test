function solution(decimal) {
  const stack = [];

  while (decimal > 0) {
    const remainder = decimal % 2;
    stack.push(remainder);
    decimal = Math.floor(decimal / 2);
  }

  return stack.reverse().join("");
}

console.log(solution(10)); // 1010
console.log(solution(27)); // 11011
console.log(solution(12345)); // 11000000111001
