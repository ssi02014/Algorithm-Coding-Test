function solution(picks, minerals) {
  const NUMBER_OF_USES = 5; // 곡괭이 사용 횟수
  const pickaxeCostObj = {
    // diamond
    0: {
      diamond: 1,
      iron: 1,
      stone: 1,
    },
    // iron
    1: {
      diamond: 5,
      iron: 1,
      stone: 1,
    },
    // stone
    2: {
      diamond: 25,
      iron: 5,
      stone: 1,
    },
  };
  let result = Number.MAX_SAFE_INTEGER;

  const dfs = (curMineralIdx, totalCost) => {
    // 광물을 다 캠
    if (curMineralIdx >= minerals.length) {
      result = Math.min(result, totalCost);
      return;
    }
    // 사용가능한 곡괭이 존재 유무
    let isExistPick = false;

    for (let i = 0; i < picks.length; i++) {
      if (!picks[i]) continue; // 현재 곡괭이 사용할 수 없음
      isExistPick = true;

      let count = 0;
      let curCost = 0;

      // 현재 곡괭이를 5번 사용할 때 까지 반복
      while (count < NUMBER_OF_USES) {
        if (count + curMineralIdx >= minerals.length) break;

        const pickAxe = pickaxeCostObj[i];
        const nextMineral = minerals[count + curMineralIdx];

        curCost += pickAxe[nextMineral];
        count++;
      }

      // 백트랙킹
      picks[i]--;
      dfs(curMineralIdx + NUMBER_OF_USES, totalCost + curCost);
      picks[i]++;
    }

    // 사용 가능한 곡괭이가 없음
    if (!isExistPick) {
      result = Math.min(result, totalCost);
    }
  };

  dfs(0, 0);

  return result;
}
