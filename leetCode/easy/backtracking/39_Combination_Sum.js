/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = [];
  const tempArr = [];

  candidates.sort((a, b) => a - b);

  const recursive = (idx, sum) => {
    if (sum > target) return;
    if (sum === target) {
      result.push([...tempArr]);
      return;
    }

    for (let i = idx; i < candidates.length; i++) {
      if (candidates[i] > target) break;

      tempArr.push(candidates[i]);
      recursive(i, sum + candidates[i]);
      tempArr.pop();
    }
  };

  recursive(0, 0);

  return result;
};
