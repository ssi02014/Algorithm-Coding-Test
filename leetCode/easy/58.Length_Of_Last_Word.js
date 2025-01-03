/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLastWord = function (s) {
  const str = s.replace(/ +/g, " ").trim().split(" ");

  return str.at(-1).length;
};
