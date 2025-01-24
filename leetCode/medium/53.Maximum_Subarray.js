var maxSubArray = function (nums) {
  if (!nums.length) return 0;

  let max = Number.MIN_SAFE_INTEGER;
  let currentMax = 0;

  for (const num of nums) {
    currentMax = Math.max(num, currentMax + num);
    max = Math.max(currentMax, max);
  }

  return max;
};
