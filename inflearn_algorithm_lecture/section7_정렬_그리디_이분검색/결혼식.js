function solution(times) {
  let result = Number.MIN_SAFE_INTEGER;
  let temp = [];

  times.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  for (let time of times) {
    const [start, end] = time;

    temp.push(end);

    if (temp.length) {
      temp = temp.filter((el) => el > start);
    }

    result = Math.max(result, temp.length);
  }

  return result;
}

function lectureSolution(times) {
  let answer = Number.MIN_SAFE_INTEGER;
  let timeLine = [];
  let count = 0;

  for (let time of times) {
    timeLine.push([time[0], "s"]);
    timeLine.push([time[1], "e"]);
  }

  timeLine.sort((a, b) => a[0] - b[0] || a[1].charCodeAt() - b[1].charCodeAt());

  for (let time of timeLine) {
    if (time[1] === "s") count++;
    else count--;

    answer = Math.max(answer, count);
  }

  return answer;
}

console.log(
  solution([
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 15],
  ])
);

console.log(
  lectureSolution([
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 15],
  ])
);
