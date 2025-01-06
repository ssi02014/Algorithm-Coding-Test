/**
 * 2974. Minimum Number Game
 * topic: Array, Sorting, Heap (Priority Queue), Simulation
 *
 * @see https://leetcode.com/problems/minimum-number-game/description/
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function (nums) {
  const sortedNums = [...nums].sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < sortedNums.length - 1; i += 2) {
    const cur = sortedNums[i];
    const next = sortedNums[i + 1];

    result.push(next, cur);
  }
  return result;
};
