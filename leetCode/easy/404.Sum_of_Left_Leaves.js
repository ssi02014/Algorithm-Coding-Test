/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 404. Sum of Left Leaves
 * topic: Tree, Depth-First Search, Breadth-First Search, Binary Tree
 * @see https://leetcode.com/problems/sum-of-left-leaves
 *
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  let sum = 0;

  if (!root) return sum;

  const search = (node, isLeft) => {
    if (!node.left && !node.right && isLeft) {
      sum += node.val;
      return;
    }

    if (node.left) {
      search(node.left, true);
    }

    if (node.right) {
      search(node.right, false);
    }
  };

  search(root, 0);

  return sum;
};
