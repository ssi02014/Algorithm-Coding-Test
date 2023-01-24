function solution(meeting) {
  const sortMeeting = meeting.sort((a, b) => a[1] - b[1] || a[0] - b[0]);
  let tempEnd = 0;
  let result = 0;

  for (let time of sortMeeting) {
    const [start, end] = time;

    if (tempEnd <= start) {
      tempEnd = end;
      result++;
    }
  }
  return result;
}

console.log(
  solution([
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7],
  ])
);

console.log(
  solution([
    [3, 3],
    [1, 3],
    [2, 3],
  ])
);
