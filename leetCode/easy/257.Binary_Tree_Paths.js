/**
 * 257. Binary Tree Paths
 * topic: String, Backtracking, Tree, Depth-First Search, Binary Tree
 * @see https://leetcode.com/problems/contains-duplicate
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 *
 * // Tip: 이진트리는 배열로 표현할 때 인덱스 0부터 시작 할 경우 왼쪽은 curIdx * 2 + 1, 오른쪽은 curIdx * 2 + 2입니다.
 * // 인덱스 1부터 시작할 경우에는 왼쪽은 curIdx * 2, 오른쪽은 curIdx * 2 + 1입니다.
 * // https://lmw1119.tistory.com/286
 *
 * Input: root = [1,2,3,null,5]
 * Output: ["1->2->5","1->3"]
 */
var binaryTreePaths = function (root) {
  const result = [];

  const search = (node, value) => {
    if (!node) return;

    const valueToUse = value === "" ? `${node.val}` : `${value}->${node.val}`;

    if (!node.left && !node.right) {
      result.push(valueToUse);
    } else {
      search(node.left, valueToUse);
      search(node.right, valueToUse);
    }
  };

  search(root, "");

  return result;
};
