function solution(source) {
  const list = source.split("\n");
  const maxLength = getMaxLength(list);

  const result = list.map((el) => {
    const remainderLength = maxLength - el.length;
    const str = "#".repeat(remainderLength);

    return el + str;
  });

  return result.join("\n");
}

function getMaxLength(list) {
  let length = 0;
  list.map((el) => {
    length = Math.max(el.length, length);
  });
  return length;
}
