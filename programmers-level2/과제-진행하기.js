// 재귀 시도 하지만 정답 X
function solution(plans) {
  const result = [];
  const stack = [];

  const getAllMinutes = (time) => {
    const [hour, minute] = time.split(":").map(Number);

    return hour * 60 + minute;
  };
  const convertedPlans = plans
    .map((plan) => {
      const [work, startTime, workTime] = plan;
      const allMinutes = getAllMinutes(startTime);

      return [work, allMinutes, +workTime];
    })
    .sort((a, b) => a[1] - b[1]);

  const dfs = (curIdx, prevItem) => {
    if (!prevItem) {
      dfs(curIdx + 1, convertedPlans[curIdx]);
      return;
    }

    if (curIdx === convertedPlans.length) {
      return;
    }

    const [curWork, curStartTime, curWorkTime] = convertedPlans[curIdx];
    const [prevWork, prevStartTime, prevWorkTime] = prevItem;

    if (prevStartTime + prevWorkTime <= curStartTime) {
      let availableTime = curStartTime - prevStartTime - prevWorkTime;
      result.push(prevItem);

      while (stack) {
        const stackItem = stack.pop();
        const [stackWork, stackWorkTime] = stackItem;

        if (stackTime <= availableTime) {
          availableTime -= stackWorkTime;
          result.push(stackItem);
        } else {
          stack.push([stackWork, stackWorkTime - availableTime]);
        }
      }
    }

    if (prevStartTime + prevWorkTime > curStartTime) {
      const temp = [
        prevWork,
        prevStartTime,
        prevWorkTime - (curStartTime - prevStartTime),
      ];

      tempStack.push(temp);
      dfs(curIdx + 1, convertedPlans[curIdx], tempStack);
    } else {
      result.push(prevItem);
      dfs(curIdx + 1, convertedPlans[curIdx], tempStack);
    }
  };

  dfs(0, null);

  console.log(result.map((el) => el[0]));
  return result.map((el) => el[0]);
}

// solution([
//   ["korean", "11:40", "30"],
//   ["english", "12:10", "20"],
//   ["math", "12:30", "40"],
// ]);

solution([
  ["science", "12:40", "50"],
  ["music", "12:20", "40"],
  ["history", "14:00", "30"],
  ["computer", "12:30", "100"],
]);

// solution([
//   ["aaa", "12:00", "20"],
//   ["bbb", "12:10", "30"],
//   ["ccc", "12:40", "10"],
// ]);

// 정답 풀이
function solution(plans) {
  const answer = [];

  const getAllMinutes = (time) => {
    const [hour, minute] = time.split(":").map(Number);

    return hour * 60 + minute;
  };

  const sortedPlans = plans
    .map(([subject, startTime, workTime]) => [
      subject,
      getAllMinutes(startTime),
      +workTime,
    ])
    .sort((a, b) => a[1] - b[1]);

  const stack = [];

  for (let i = 0; i < sortedPlans.length - 1; i++) {
    const [curSubject, curStartTime, curWorkTime] = sortedPlans[i];
    const [nextSubject, nextStartTime, nextWorkTime] = sortedPlans[i + 1];

    if (curStartTime + curWorkTime <= nextStartTime) {
      let availableTime = nextStartTime - curStartTime - curWorkTime;

      answer.push(curSubject);

      while (stack.length) {
        const [stackSubject, stackStartTime] = stack.pop();

        if (stackStartTime <= availableTime) {
          availableTime -= stackStartTime;
          answer.push(stackSubject);
        } else {
          stack.push([stackSubject, stackStartTime - availableTime]);
          break;
        }
      }
    } else {
      stack.push([curSubject, curWorkTime - (nextStartTime - curStartTime)]);
    }
  }

  stack.push(sortedPlans.at(-1));
  answer.push(...stack.reverse().map((el) => el[0]));

  return answer;
}
