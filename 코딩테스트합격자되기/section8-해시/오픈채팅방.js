/**
 * 프로그래머스 레벨2 오픈 채팅방
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/42888
 */
function solution(record) {
  const nicknameMappingObj = {};
  const stack = [];
  const result = [];

  const getMessage = (command, nickname) => {
    if (command === "Enter") {
      return `${nickname}님이 들어왔습니다.`;
    }
    return `${nickname}님이 나갔습니다.`;
  };

  for (let i = 0; i < record.length; i++) {
    const [command, id, nickname] = record[i].split(" ");

    // 메시지가 필요한 Enter, Leave만 stack에 push
    if (command !== "Change") {
      stack.push([command, id]);
    }

    // Enter, Change만 객체에 닉네임을 추가/갱신
    if (command !== "Leave") {
      nicknameMappingObj[id] = nickname;
    }
  }

  for (let i = 0; i < stack.length; i++) {
    const [command, id] = stack[i];

    const message = getMessage(command, nicknameMappingObj[id]);

    if (message) {
      result.push(message);
    }
  }

  return result;
}
