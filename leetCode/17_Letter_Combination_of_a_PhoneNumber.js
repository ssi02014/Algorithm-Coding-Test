/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const obj = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  const result = [];

  if (digits.length === 0) return [];

  permute("", 0);
  return result;

  function permute(string, index) {
    if (index === digits.length) {
      result.push(string);
      return;
    }

    for (let el of obj[digits[index]]) {
      permute(string + el, index + 1);
    }
  }
};
