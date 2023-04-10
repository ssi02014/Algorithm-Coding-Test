function solution(book_time) {
  const appointmentTimes = book_time.map((time) =>
    time.map((el) => +el.replace(":", ""))
  );
  const tempArr = [];
  let result = 0;

  appointmentTimes.sort((a, b) => a[0] - b[0]);

  const getCheckoutTime = (time) => {
    const oneDigit = time % 10;
    const tenDigit = time % 100;

    if (tenDigit < 50) {
      return time + 10;
    }
    return Math.floor((time + 100) / 100) * 100 + oneDigit;
  };

  for (const curTime of appointmentTimes) {
    const [curStart, curEnd] = curTime;
    const availableRoomIdx = tempArr.findIndex(([_, tempEnd]) => {
      return curStart >= getCheckoutTime(tempEnd);
    });

    if (!result || availableRoomIdx === -1) {
      result++;
      tempArr.push(curTime);
      continue;
    }

    tempArr[availableRoomIdx] = curTime;
  }

  return tempArr.length;
}
