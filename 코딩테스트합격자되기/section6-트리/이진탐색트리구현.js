// 노드(Node) 클래스
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// 이진 탐색 트리(Binary Search Tree) 클래스
class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (!this.root) {
      this.root = new Node(value);
      return;
    }

    let curNode = this.root;

    while (true) {
      if (value < curNode.left) {
        if (curNode.left) {
          curNode = curNode.left;
        } else {
          curNode.left = new Node(value);
          break;
        }
      } else {
        if (curNode.right) {
          curNode = curNode.right;
        } else {
          curNode.right = new Node(value);
          break;
        }
      }
    }
  }

  search(value) {
    let curNode = this.root;

    while (curNode && curNode.value !== value) {
      if (value < curNode.left) {
        curNode = curNode.left;
      } else {
        curNode = curNode.right;
      }
    }

    return curNode;
  }
}

/**
 * 몸 풀기 문제2 이진 탐색 트리 구현
 * Node와 BST(Binary Search Tree) 클래스 생성 후 작업
 */
function solution(list, searchList) {
  const bst = new BST();
  const result = [];

  for (let i = 0; i < list.length; i++) {
    bst.insert(list[i]);
  }

  for (let i = 0; i < searchList.length; i++) {
    if (bst.search(searchList[i])) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
}

console.log(solution([5, 3, 8, 4, 2, 1, 7, 10], [1, 2, 5, 6])); // [true, true, true, false]
console.log(solution([1, 3, 5, 7, 9], [2, 4, 6, 8, 10])); // [false, false, false, false, false]
