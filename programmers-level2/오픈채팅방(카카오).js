function solution(records) {
  const result = [];
  const temp = {};

  let elements = [];

  records.map((record) => {
    elements = record.split(" ");

    for (let i = 0; i < elements.length; i++) {
      if (elements[0] === "Enter" || elements[0] === "Change") {
        temp[elements[1]] = elements[2];
      }
    }
  });

  records.map((record) => {
    elements = record.split(" ");

    if (elements[0] === "Enter") {
      result.push(`${temp[elements[1]]}님이 들어왔습니다.`);
    } else if (elements[0] === "Leave") {
      result.push(`${temp[elements[1]]}님이 나갔습니다.`);
    }
  });

  return result;
}
