var threeSum = function (nums) {
  const result = [];

  nums.sort((a, b) => a - b);

  if (nums.length < 3) return [];

  for (let i = 0; i < nums.length; i++) {
    const initNum = nums[i];
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = initNum + nums[left] + nums[right];
      const temp = [nums[i], nums[left], nums[right]];

      if (!sum) {
        const flag = result.every(
          (el) => el[0] !== temp[0] || el[1] !== temp[1] || el[2] !== temp[2]
        );

        if (flag) result.push(temp);
        left++;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
};

let a = [-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0];
console.log(threeSum(a));
