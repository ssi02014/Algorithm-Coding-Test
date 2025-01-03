/**
 * 217. Contains Duplicate
 * topic: Array, Hash Table, Sorting
 * @see https://leetcode.com/problems/contains-duplicate
 *
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let obj = {};

  nums.forEach((el) => {
    if (obj[el]) obj[el]++;
    else obj[el] = 1;
  });

  for (let el in obj) {
    if (obj[el] > 1) return true;
  }
  return false;
};
