function solution(weights, head2head) {
  const rateList = [];
  const overWinCount = [];
  let totalList = [];

  head2head.map((head, i) => {
    let winRate = 0;
    let overCount = 0;
    let totalPlay = 0;

    head.split("").map((el, j) => {
      if (el !== "N") totalPlay += 1;
      if (el === "W") {
        winRate += 1;
        if (weights[i] < weights[j]) overCount += 1;
      }
    });
    totalPlay ? rateList.push((winRate / totalPlay) * 100) : rateList.push(0);
    overWinCount.push(overCount);
  });

  totalList = weights.map((el, i) => {
    return {
      weight: el,
      num: i + 1,
      total: head2head[i],
      rate: rateList[i],
      over: overWinCount[i],
    };
  });

  // sort예제1
  // return totalList.sort((a, b) => {
  //     if (a.rate > b.rate) return -1;
  //     else if (a.rate === b.rate) {
  //         if (a.over > b.over) return -1;
  //         else if (a.over === b.over) {
  //             if (a.weight > b.weight) return -1;
  //             else if (a.weight === b.weight) {
  //                 if (a.num < b.num) return 1;
  //             }
  //         }
  //     }
  // }).map(total => total.num);

  // sort 예제2
  return totalList
    .sort((a, b) => {
      return (
        b.rate - a.rate ||
        b.over - a.over ||
        b.weight - a.weight ||
        a.num - b.num
      );
    })
    .map((total) => total.num);
}
