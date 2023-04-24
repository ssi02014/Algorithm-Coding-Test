function solution(my_string, queries) {
  const myArr = my_string.split("");

  queries.forEach((query) => {
    const [start, end] = query;

    for (let i = 0; i <= Math.floor((end - start) / 2); i++) {
      [myArr[start + i], myArr[end - i]] = [myArr[end - i], myArr[start + i]];
    }
  });

  return myArr.join("");
}
