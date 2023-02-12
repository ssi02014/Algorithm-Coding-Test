/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  return nums.reduce((acc, cur, i) => {
    acc.push(!i ? cur : acc.at(-1) + cur);
    return acc;
  }, []);
};
