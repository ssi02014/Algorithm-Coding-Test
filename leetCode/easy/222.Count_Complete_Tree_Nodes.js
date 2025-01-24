/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 222. Count Complete Tree Nodes
 * topic: Binary Search, Bit Manipulation, Tree, Binary Tree
 * @see https://leetcode.com/problems/count-complete-tree-nodes
 *
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  let count = 0;

  if (!root) return 0;

  const search = (node) => {
    count++;

    if (!node?.left && !node?.right) return;

    if (node.left) {
      search(node.left);
    }

    if (node.right) {
      search(node.right);
    }
  };
  search(root);

  return count;
};
