/**
 * 프로그래머스 레벨3 표 변환 - 재풀이 필요 (고난이도 문제)
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/81303
 */
function solution(n, k, cmd) {
  const graph = Array(n).fill("O");
  const stack = [];
  let curRow = k + 1;

  const upTable = Array.from({ length: n + 2 }, (_, i) => i - 1);
  const downTable = Array.from({ length: n + 2 }, (_, i) => i + 1);

  // -1 0 1 2 3 4 5 6 7 8
  // 0 1 2 3 4 5 6 7 8 9
  for (let i = 0; i < cmd.length; i++) {
    const [command, number] = cmd[i].split(" ");

    if (command === "D" || command === "U") {
      const table = command === "D" ? downTable : upTable;

      for (let j = 0; j < number; j++) {
        curRow = table[curRow];
      }
    } else if (command === "C") {
      stack.push(curRow);

      upTable[downTable[curRow]] = upTable[curRow];
      downTable[upTable[curRow]] = downTable[curRow];

      curRow = n < downTable[curRow] ? upTable[curRow] : downTable[curRow];
    } else if (command === "Z") {
      const restoredItem = stack.pop();

      upTable[downTable[restoredItem]] = restoredItem;
      downTable[upTable[restoredItem]] = restoredItem;
    }
  }

  for (let i = 0; i < stack.length; i++) {
    const idx = stack[i];

    graph[idx - 1] = "X";
  }

  return graph.join("");
}
