function solution(arr, query) {
  query.forEach((el, i) => {
    if (i % 2 === 0) {
      arr.splice(el + 1);
    } else {
      arr.splice(0, el);
    }
  });

  return arr;
}
