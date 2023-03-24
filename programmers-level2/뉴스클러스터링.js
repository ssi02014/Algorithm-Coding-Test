function solution(str1, str2) {
  const upperStr1 = str1.toUpperCase();
  const upperStr2 = str2.toUpperCase();

  const getMultipleSet = (str) => {
    const arr = str.split("");
    const regex = /[A-Z]{2}/gi;
    const result = [];

    for (let i = 0; i < arr.length; i++) {
      const tempStr = arr[i] + arr[i + 1];
      const isMatch = tempStr.match(regex);

      if (isMatch) result.push(tempStr);
    }
    return result;
  };

  const getUnionAndIntersection = (set1, set2) => {
    const union = [];
    const intersection = [];

    set2.forEach((el) => {
      const idx = set1.indexOf(el);

      if (idx !== -1) {
        intersection.push(set1.splice(idx, 1));
      }
      union.push(el);
    });
    set1.forEach((el) => union.push(el));

    return [union, intersection];
  };

  const multipleSet1 = getMultipleSet(upperStr1);
  const multipleSet2 = getMultipleSet(upperStr2);
  const [union, intersection] = getUnionAndIntersection(
    multipleSet1,
    multipleSet2
  );

  if (!union.length) return 65536;
  if (!intersection.length) return 0;
  return Math.floor((intersection.length / union.length) * 65536);
}
