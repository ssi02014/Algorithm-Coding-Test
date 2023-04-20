function solution(records) {
  const stack = [];
  const nicknameMappingObj = {};

  records.forEach((record) => {
    const [inOut, uid, nickname] = record.split(" ");

    if (inOut !== "Change") {
      stack.push([inOut, uid]);
    }

    if (nickname) {
      nicknameMappingObj[uid] = nickname;
    }
  });

  return stack.map((el) => {
    const [inOut, uid] = el;

    if (inOut === "Enter") {
      return `${nicknameMappingObj[uid]}님이 들어왔습니다.`;
    }
    return `${nicknameMappingObj[uid]}님이 나갔습니다.`;
  });
}
