/**
 * 몸 풀기 문제1 트리 순회 (기본 문제)
 *
 * (부모를 먼저 방문하냐 중간에 방문하냐 나중에 방문하냐 기준으로 생각하면 됩니다.)
 * 1. 전위 순회(preorder): 부모 노드 -> 왼쪽 자식 노드 -> 오른쪽 자식 노드
 * 2. 중위 순회(inorder): 왼쪽 자식 노드 -> 부모 노드 -> 오른쪽 자식 노드
 * 3. 후위 순회(postorder): 왼쪽 자식 노드 -> 오른쪽 자식 노드 -> 부모 노드
 *
 * 트리를 배열로 표현(루트 노드를 배열 인덱스 1번이라고 가정)
 * 1. 왼쪽 자식 노드의 배열 인덱스는 부모 노드의 배열 인덱스 x 2
 * 2. 오른쪽 자식 노드의 배열 인덱스는 부모 노드의 배열 인덱스 x 2 + 1
 *
 * 트리를 배열로 표현(루트 노드를 배열 인덱스 0번이라고 가정)
 * 1. 왼쪽 자식 노드의 배열 인덱스는 부모 노드의 배열 인덱스 x 2 + 1
 * 2. 오른쪽 자식 노드의 배열 인덱스는 부모 노드의 배열 인덱스 x 2 + 2
 */
function solution(nodes) {
  const preOrder = (nodes, index) => {
    let order = "";

    if (index < nodes.length) {
      order += nodes[index] + " ";
      order += preOrder(nodes, index * 2 + 1);
      order += preOrder(nodes, index * 2 + 2);
    }

    return order;
  };

  const inOrder = (nodes, index) => {
    let order = "";

    if (index < nodes.length) {
      order += inOrder(nodes, index * 2 + 1);
      order += nodes[index] + " ";
      order += inOrder(nodes, index * 2 + 2);
    }

    return order;
  };

  const postOrder = (nodes, index) => {
    let order = "";

    if (index < nodes.length) {
      order += postOrder(nodes, index * 2 + 1);
      order += postOrder(nodes, index * 2 + 2);
      order += nodes[index] + " ";
    }

    return order;
  };

  return [
    preOrder(nodes, 0).slice(0, -1),
    inOrder(nodes, 0).slice(0, -1),
    postOrder(nodes, 0).slice(0, -1),
  ];
}

console.log(solution([1, 2, 3, 4, 5, 6, 7])); // ["1 2 3 4 5 6 7", "4 2 5 1 6 3 7", "4 5 2 6 7 3 1"]
