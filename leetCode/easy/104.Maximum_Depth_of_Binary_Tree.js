/**
 * 104. Maximum Depth of Binary Tree
 * topic: Tree, Depth-First Search, Breadth-First Search, Binary Tree
 * @see https://leetcode.com/problems/maximum-depth-of-binary-tree
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 *
 * @param {TreeNode} root
 * @return {number}
 */
// DFS
var maxDepth = function (root) {
  if (root == null) return 0;

  let result = 1;

  const search = (node, depth) => {
    if (!node?.left && !node?.right) {
      result = Math.max(result, depth);
      return;
    } else {
      search(node.left, depth + 1);
      search(node.right, depth + 1);
    }
  };

  search(root, 1);
  return result;
};

// BFS
var maxDepth2 = function (root) {
  if (root == null) return 0;

  const queue = [];

  const bfs = (node) => {
    let result = 1;

    queue.push([node, result]);

    while (queue.length) {
      const [firstNode, depth] = queue.shift();

      result = depth;

      if (firstNode.left) {
        queue.push([firstNode.left, depth + 1]);
      }

      if (firstNode.right) {
        queue.push([firstNode.right, depth + 1]);
      }
    }

    return result;
  };

  return bfs(root);
};
