function solution(progresses, speeds) {
  const result = [];

  while (progresses.length) {
    let count = 0;

    progresses.forEach((progress, idx) => {
      progresses[idx] += speeds[idx];
    });

    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      count++;
    }

    count && result.push(count);
  }

  return result;
}
