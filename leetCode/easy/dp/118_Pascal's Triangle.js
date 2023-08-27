/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const dp = [[1], [1, 1]];

  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1], [1, 1]];

  for (let i = 2; i < numRows; i++) {
    const temp = [1];

    for (let j = 0; j < dp[i - 1].length - 1; j++) {
      temp.push(dp[i - 1][j] + dp[i - 1][j + 1]);
    }

    temp.push(1);
    dp.push(temp);
  }

  return dp;
};
