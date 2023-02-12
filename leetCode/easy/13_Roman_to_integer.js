/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const roman = {
    I: 1,
    IV: 4,
    IX: 9,
    V: 5,
    X: 10,
    XL: 40,
    XC: 90,
    L: 50,
    C: 100,
    CD: 400,
    CM: 900,
    D: 500,
    M: 1000,
  };
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (roman[s[i] + s[i + 1]]) {
      result += roman[s[i] + s[i + 1]];
      i++;
    } else {
      result += roman[s[i]];
    }
  }
  return result;
};
