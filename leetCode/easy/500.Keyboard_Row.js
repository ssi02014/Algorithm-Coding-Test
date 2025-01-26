/**
 * 500. Keyboard Row
 * topic: Array, Hash Table, String
 * @see https://leetcode.com/problems/keyboard-row
 *
 * @param {string[]} words
 * @return {string[]}
 */
const FIRST_ROW = "qwertyuiop";
const SECOND_ROW = "asdfghjkl";
const THIRD_ROW = "zxcvbnm";

var findWords = function (words) {
  const result = [];

  const getMappingObj = (str) => {
    const obj = {};

    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      obj[char] = (obj[char] || 0) + 1;
    }

    return obj;
  };

  const firstRowMappingObj = getMappingObj(FIRST_ROW);
  const secondRowMappingObj = getMappingObj(SECOND_ROW);
  const thirdRowMappingObj = getMappingObj(THIRD_ROW);

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const lowerCaseWord = word.toLowerCase();
    const counts = [0, 0, 0];

    for (let i = 0; i < lowerCaseWord.length; i++) {
      const char = lowerCaseWord[i];

      if (firstRowMappingObj[char]) {
        counts[0]++;
        continue;
      }

      if (secondRowMappingObj[char]) {
        counts[1]++;
        continue;
      }

      if (thirdRowMappingObj[char]) {
        counts[2]++;
      }
    }

    if (counts.filter((item) => item > 0).length === 1) {
      result.push(word);
    }
  }
  return result;
};
