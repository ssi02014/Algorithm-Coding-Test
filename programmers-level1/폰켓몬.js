// function solution(nums) {
//     const DIV_LENGTH = parseInt(nums.length / 2);
//     const setNums = new Set(nums);

//     return setNums.size > DIV_LENGTH ? DIV_LENGTH : setNums.size

// }

function solution(nums) {
  const DIV_LENGTH = parseInt(nums.length / 2);
  const result = [];

  nums.map((el) => {
    if (!result.includes(el)) result.push(el);
  });

  return result.length > DIV_LENGTH ? DIV_LENGTH : result.length;
}
