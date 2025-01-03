/**
 * 1791. Find Center of Star Graph
 * topic: Graph
 * @see https://leetcode.com/problems/find-center-of-star-graph
 *
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
  const obj = {};
  let result = -1;

  edges.forEach((edge) => {
    const [x, y] = edge;

    obj[x] = (obj[x] || 0) + 1;
    obj[y] = (obj[y] || 0) + 1;

    if (obj[x] === edges.length) {
      result = x;
    } else if (obj[y] === edges.length) {
      result = y;
    }
  });

  return result;
};
