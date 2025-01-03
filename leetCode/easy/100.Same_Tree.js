/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * 100. Same Tree
 * topic: Tree, Binary Tree
 * @see https://leetcode.com/problems/same-tree
 *
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  const compare = (p1, q1) => {
    // tip: 둘 다 빈 노드 일 경우 true임
    if (!p1 && !q1) return true;

    // p1, q1이 모두 존재한 상태에서, p1의 값과 q1의 값이 같다면, 다음 depth 체크
    if (p1 && q1 && p1.val === q1.val) {
      return compare(p1.left, q1.left) && compare(p1.right, q1.right);
    }

    return false;
  };

  return compare(p, q);
};
