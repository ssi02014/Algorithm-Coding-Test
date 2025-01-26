/**
 * 476. Number Complement
 * topic: Bit Manipulation
 * @see https://leetcode.com/problems/number-complement
 *
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  const binary = num.toString(2);
  let complement = "";

  for (const num of binary) {
    if (num === "0") {
      complement += "1";
    } else {
      complement += "0";
    }
  }

  return parseInt(complement, 2);
};
