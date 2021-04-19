function solution(N, stages) {
  const result = [];

  let failRatio = 0;
  let stageNum = 0;
  let stagesLength = stages.length;

  for (let i = 1; i <= N; i++) {
    stageNum = stages.filter((el) => el === i).length;

    if (stageNum === 0) failRatio = 0;
    else failRatio = stageNum / stagesLength;

    stagesLength -= stageNum;
    result.push({ stage: i, ratio: failRatio });
  }

  result.sort((a, b) =>
    a.ratio === b.ratio ? a.stage - b.stage : b.ratio - a.ratio
  );

  return result.map((el) => el.stage);
}
