/**
 * 389. Find the Difference
 * topic: Hash Table, String, Bit Manipulation, Sorting
 * @see https://leetcode.com/problems/find-the-difference
 *
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  const sObj = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    sObj[char] = (sObj[char] || 0) + 1;
  }

  for (let i = 0; i < t.length; i++) {
    const char = t[i];

    if (sObj[char]) {
      sObj[char]--;
    } else {
      sObj[char] = -1;
    }
  }

  for (const key in sObj) {
    if (sObj[key] < 0) return key;
  }
};
