/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const prefixSum = nums.reduce((acc, cur, i) => {
    acc.push(!i ? cur : acc.at(-1) + cur);
    return acc;
  }, []);

  for (let i = 0; i < nums.length; i++) {
    const rightSum = !i
      ? prefixSum.at(-1)
      : prefixSum.at(-1) - prefixSum[i - 1];
    const leftSum = prefixSum[i];

    if (rightSum === leftSum) return i;
  }

  return -1;
};
