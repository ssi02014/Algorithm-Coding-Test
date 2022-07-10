function solution(n, lost, reserve) {
  [lost, reserve] = getDeletedLostAndReserveSameStudent(
    lost.sort((a, b) => a - b),
    reserve.sort((a, b) => a - b)
  );
  return n - getDeletedBorrowedStudent(lost, reserve).length;
}

// 여유분이 있는 학생과 도난당한 학생이 동일할 때 각 배열에서 제거
function getDeletedLostAndReserveSameStudent(lost, reserve) {
  const copyLost = [...lost];
  const copyReserve = [...reserve];
  let i = 0;

  while (i < copyReserve.length) {
    const cur = copyLost.indexOf(copyReserve[i]);

    if (cur !== -1) {
      copyLost.splice(cur, 1);
      copyReserve.splice(i, 1);
      continue;
    }
    i++;
  }
  return [copyLost, copyReserve];
}

// 빌린 학생 배열에서 제거
function getDeletedBorrowedStudent(lost, reserve) {
  const copyLost = [...lost];

  for (let i = 0; i < reserve.length; i++) {
    const prev = copyLost.indexOf(reserve[i] - 1);
    const next = copyLost.indexOf(reserve[i] + 1);

    if (prev !== -1) copyLost.splice(prev, 1);
    else if (next !== -1) copyLost.splice(next, 1);
  }

  return copyLost;
}
