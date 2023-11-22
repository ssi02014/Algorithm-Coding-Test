/**
 * @description
 * 문제 주소: https://www.acmicpc.net/problem/1991
 * 알고리즘: 트리 순회, 재귀
 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const tree = input
    .slice(1)
    .map((el) => el.split(" "))
    .reduce((acc, cur) => {
      acc[cur[0]] = [cur[1], cur[2]];
      return acc;
    }, {});

  let preOrderResult = "";
  let inOrderResult = "";
  let postOrderResult = "";

  // 전위 순회
  const preOrder = (node) => {
    if (node !== ".") {
      preOrderResult += node;
      preOrder(tree[node][0]);
      preOrder(tree[node][1]);
    }
  };

  // 중위 순회
  const inOrder = (node) => {
    if (node !== ".") {
      inOrder(tree[node][0]);
      inOrderResult += node;
      inOrder(tree[node][1]);
    }
  };

  // 후위 순회
  const postOrder = (node) => {
    if (node !== ".") {
      postOrder(tree[node][0]);
      postOrder(tree[node][1]);
      postOrderResult += node;
    }
  };

  preOrder("A");
  inOrder("A");
  postOrder("A");

  console.log(`${preOrderResult}\n${inOrderResult}\n${postOrderResult}`);
});
