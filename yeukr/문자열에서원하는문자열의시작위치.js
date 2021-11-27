function solution(str, find) {
  let idx = -1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === find[0]) {
      let temp = "";

      for (let j = 0; j < find.length; j++) {
        temp += str[i + j];

        if (temp === find) {
          idx = i;
          break;
        }
      }
    }
    if (idx !== -1) break;
  }

  return idx;
}
