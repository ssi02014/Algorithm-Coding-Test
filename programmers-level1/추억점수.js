function solution(name, yearning, photo) {
  const pointBoard = {};

  name.forEach((el, i) => (pointBoard[el] = yearning[i]));

  return photo.map((el) => {
    return el.reduce((acc, cur) => {
      if (!pointBoard[cur]) return acc;
      return acc + pointBoard[cur];
    }, 0);
  });
}
