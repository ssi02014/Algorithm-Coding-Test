/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let result = "";

  if (!strs) return "";

  for (let i = 0; i < strs[0].length; i++) {
    const prefix = strs[0][i];

    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== prefix) return result;
    }
    result += prefix;
  }

  return result;
};
