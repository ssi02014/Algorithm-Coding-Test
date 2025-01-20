/**
 * 387. First Unique Character in a String
 * topic: Hash Table, String, Queue, Counting
 * @see https://leetcode.com/problems/first-unique-character-in-a-string
 *
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const obj = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    obj[char] = (obj[char] || 0) + 1;
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (obj[char] === 1) {
      return i;
    }
  }

  return -1;
};
