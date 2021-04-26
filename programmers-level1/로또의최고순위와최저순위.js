function solution(lottos, win_nums) {
  const result = [];

  let [topRank, lowestRank] = [0, 0];

  lottos.map((el) => {
    if (win_nums.includes(el)) {
      topRank++;
      lowestRank++;
    }

    if (el === 0) {
      topRank++;
    }
  });

  if (topRank === 6) result.push(1);
  else if (topRank === 5) result.push(2);
  else if (topRank === 4) result.push(3);
  else if (topRank === 3) result.push(4);
  else if (topRank === 2) result.push(5);
  else result.push(6);

  if (lowestRank === 6) result.push(1);
  else if (lowestRank === 5) result.push(2);
  else if (lowestRank === 4) result.push(3);
  else if (lowestRank === 3) result.push(4);
  else if (lowestRank === 2) result.push(5);
  else result.push(6);

  return result;
}
