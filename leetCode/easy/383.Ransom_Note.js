/**
 * 383. Ransom Note
 * topic: Hash Table, String, Counting
 * @see https://leetcode.com/problems/ransom-note
 *
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const getCountingObj = (str) => {
    const obj = {};

    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      obj[char] = (obj[char] || 0) + 1;
    }

    return obj;
  };

  const ransomNoteObj = getCountingObj(ransomNote);
  const magazineObj = getCountingObj(magazine);

  for (const key in magazineObj) {
    if (ransomNoteObj[key]) {
      ransomNoteObj[key] -= magazineObj[key];
    }
  }

  const values = Object.values(ransomNoteObj);

  return values.filter((value) => value > 0).length === 0;
};
