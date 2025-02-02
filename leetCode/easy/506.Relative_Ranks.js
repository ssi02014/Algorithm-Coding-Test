/**
 * 506. Relative Ranks
 * topic: Array, Sorting, Heap (Priority Queue)
 * @see https://leetcode.com/problems/relative-ranks
 *
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  const RANK = ["Gold Medal", "Silver Medal", "Bronze Medal"];

  const sortedScore = [...score].sort((a, b) => b - a);
  const sortedScoreWithIdx = sortedScore.reduce((acc, cur, idx) => {
    acc[cur] = idx;
    return acc;
  }, {});

  return score.map((item, idx) => {
    const sortedScoreIdx = sortedScoreWithIdx[item];

    if (sortedScoreIdx < 3) {
      return RANK[sortedScoreIdx];
    }

    return `${sortedScoreIdx + 1}`;
  });
};
