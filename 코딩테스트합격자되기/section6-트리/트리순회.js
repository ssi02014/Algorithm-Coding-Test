/**
 * 프로그래머스 레벨2 기능 개발 (재풀이)
 * tip: 주어진 speed 값으로 각 작업 진도를 올려주고, 앞에서 100 이상이면 작업 큐에서 제거하면 됌.
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/42586
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
