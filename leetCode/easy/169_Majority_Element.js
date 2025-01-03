/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const count = {};
  let maxNum = 0;
  let result = 0;

  nums.forEach((num) => {
    count[num] = (count[num] || 0) + 1;

    if (maxNum < count[num]) {
      maxNum = count[num];
      result = num;
    }
  });
  return result;
};
