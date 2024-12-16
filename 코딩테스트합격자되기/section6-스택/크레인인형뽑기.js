/**
 * 프로그래머스 레벨1 크레인 인형뽑기(재풀이)
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/64061
 */
function solution(board, moves) {
  const stack = [];
  let count = 0;

  for (let i = 0; i < moves.length; i++) {
    const move = moves[i];

    for (let j = 0; j < board.length; j++) {
      const item = board[j][move - 1];

      if (!item) continue; // 현재 위치에 인형이 없으면 다음 칸으로 이동

      board[j][move - 1] = 0; // 해당 인형을 뽑았으니 0으로 초기화

      if (stack.at(-1) === item) {
        stack.pop();
        count += 2;
      } else {
        stack.push(item);
      }
      break; // 현재 위치한 인형을 뽑았으니 그 이후는 반복하지 않아도 됌
    }
  }
  return count;
}
