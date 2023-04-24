function solution(picture, k) {
  return picture.reduce((acc, cur) => {
    let tempStr = "";

    for (const char of cur) {
      tempStr += char.repeat(k);
    }

    for (let i = 0; i < k; i++) {
      acc.push(tempStr);
    }

    return acc;
  }, []);
}
