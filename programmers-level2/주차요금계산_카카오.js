function solution(fees, records) {
  const [defaultTime, defaultFee, unitTime, unitFee] = fees;
  const stack = [];
  const last = 23 * 60 + 59;
  let calculatedRecords = [];

  // 입차, 출차 시간 계산
  records.forEach((record) => {
    const [time, carNumber, type] = record.split(" ");
    const convertedTime = getConvertedTime(time);

    if (type === "IN") {
      stack.push({ time: convertedTime, carNumber });
    } else {
      const foundStackItemIdx = findIndexByCarNumber(stack, carNumber);
      const foundCalculateRecordItemIdx = findIndexByCarNumber(
        calculatedRecords,
        carNumber
      );
      const foundStackItemTime = stack[foundStackItemIdx].time;

      calculatedRecords = getAddedOrCalculatedTimeRecords(
        calculatedRecords,
        carNumber,
        foundCalculateRecordItemIdx,
        foundStackItemTime,
        convertedTime
      );

      stack.splice(foundStackItemIdx, 1);
    }
  });

  // 출차 없는 자동차 마무리 계산
  stack.forEach((item) => {
    const { carNumber } = item;
    const foundCalculateRecordItemIdx = findIndexByCarNumber(
      calculatedRecords,
      carNumber
    );

    calculatedRecords = getAddedOrCalculatedTimeRecords(
      calculatedRecords,
      carNumber,
      foundCalculateRecordItemIdx,
      item.time,
      last
    );
  });

  // 결과 출력
  return calculatedRecords
    .sort((a, b) => Number(a.carNumber) - Number(b.carNumber))
    .map((item) => {
      if (item.time < defaultTime) return defaultFee;
      return (
        defaultFee + Math.ceil((item.time - defaultTime) / unitTime) * unitFee
      );
    });
}

function getConvertedTime(time) {
  return time.split(":").reduce((acc, cur, idx) => {
    const numberCur = Number(cur);

    idx === 0 ? (acc += numberCur * 60) : (acc += numberCur);
    return acc;
  }, 0);
}

function findIndexByCarNumber(arr, carNumber) {
  return arr.findIndex((item) => item.carNumber === carNumber);
}

function getAddedOrCalculatedTimeRecords(
  records,
  carNumber,
  findIdx,
  entryTime,
  exitTime
) {
  const cloneArr = [...records];

  if (findIdx !== -1) {
    cloneArr[findIdx].time += exitTime - entryTime;
  } else {
    cloneArr.push({
      time: exitTime - entryTime,
      carNumber,
    });
  }

  return cloneArr;
}
