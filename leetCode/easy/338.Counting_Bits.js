/**
 * 338. Counting Bits
 * @topic Dynamic Programming(DP), Bit Manipulation
 * @see https://leetcode.com/problems/counting-bits
 *
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const result = [];

  for (let i = 0; i <= n; i++) {
    const bits = i.toString(2);
    let count = 0;

    for (let j = 0; j < bits.length; j++) {
      const bit = bits[j];

      if (bit === "1") count++;
    }

    result.push(count);
  }
  return result;
};

// DP 풀이
/**
 * 0 -> 0000 count: 0
 * 1 -> 0001 count: 1
 * 2 -> 0010 count: 1
 * 3 -> 0011 count: 2
 * 4 -> 0100 count: 1
 * 5 -> 0101 count: 2
 * 6 -> 0110 count: 2
 * 7 -> 0111 count: 3
 * 8 -> 1000 count: 1
 *
 * 2의 제곱수면 1의 개수는 1임
 * 점화식: result[i] = 1 + result[i - offset];
 */
var countBits = function (n) {
  let result = Array(n + 1).fill(0);
  let offset = 1;

  for (let i = 1; i < n + 1; i++) {
    if (offset * 2 === i) {
      offset = i;
    }
    result[i] = 1 + result[i - offset];
  }

  return result;
};
