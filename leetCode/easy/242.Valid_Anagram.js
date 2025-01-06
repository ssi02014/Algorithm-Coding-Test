/**
 * 242. Valid Anagram
 * topic: Hash Table, String, Sorting
 *
 * @see https://leetcode.com/problems/valid-anagram/description/
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const obj = {};

  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    obj[char] = (obj[char] || 0) + 1;
  }

  for (let i = 0; i < t.length; i++) {
    const char = t[i];

    if (!obj[char]) return false;

    obj[char] -= 1;
  }

  return true;
};
