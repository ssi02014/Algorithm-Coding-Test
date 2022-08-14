function solution(fees, records) {
  const [defaultTime, defaultFee, unitTime, unitFee] = fees;
  const last = 23 * 60 + 59;
  const temp = [];
  let calculatedRecords = [];

  // 입차, 출차 시간 계산
  records.forEach((record) => {
    const [time, carNumber, type] = record.split(" ");
    const convertedTime = getConvertedTime(time);

    if (type === "IN") {
      temp.push({ time: convertedTime, carNumber });
    } else {
      const foundTempItemIdx = findIndexByCarNumber(temp, carNumber);
      const foundCalculateRecordsItemIdx = findIndexByCarNumber(
        calculatedRecords,
        carNumber
      );
      const foundStackItemTime = temp[foundTempItemIdx].time;

      calculatedRecords = getAddedOrCalculatedTimeRecords(
        calculatedRecords,
        carNumber,
        foundCalculateRecordsItemIdx,
        foundStackItemTime,
        convertedTime
      );

      temp.splice(foundTempItemIdx, 1);
    }
  });

  // 출차 없는 자동차 마무리 계산
  temp.forEach((item) => {
    const { carNumber } = item;
    const foundCalculateRecordsItemIdx = findIndexByCarNumber(
      calculatedRecords,
      carNumber
    );

    calculatedRecords = getAddedOrCalculatedTimeRecords(
      calculatedRecords,
      carNumber,
      foundCalculateRecordsItemIdx,
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
  const cloneRecords = [...records];

  if (findIdx !== -1) {
    cloneRecords[findIdx].time += exitTime - entryTime;
  } else {
    cloneRecords.push({
      time: exitTime - entryTime,
      carNumber,
    });
  }

  return cloneRecords;
}

// 다른 사람 풀이
function solution2(fees, records) {
  const [defaultTime, defaultFee, unitTime, unitFee] = fees;
  const parkingTime = {};
  const answer = [];

  records.forEach((record) => {
    let [time, carNumber, type] = record.split(" ");
    let [hour, minute] = time.split(":");

    time = hour * 1 * 60 + minute * 1;

    if (!parkingTime[carNumber]) parkingTime[carNumber] = 0;

    if (type === "IN") parkingTime[carNumber] += 1439 - time;
    else parkingTime[carNumber] -= 1439 - time;
  });

  for (const entry of Object.entries(parkingTime)) {
    let [car, time] = entry;

    if (time <= defaultTime) time = defaultFee;
    else {
      time = Math.ceil((time - defaultTime) / unitTime) * unitFee + defaultFee;
    }

    answer.push([car, time]);
  }
  return answer.sort((a, b) => a[0] - b[0]).map((v) => v[1]);
}
