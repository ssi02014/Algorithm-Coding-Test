function solution(plans) {
  const result = [];

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

  const dfs = (curIdx, prevItem, stack) => {
    console.log(prevItem, convertedPlans[curIdx], stack);
    if (!prevItem) {
      dfs(curIdx + 1, convertedPlans[curIdx], stack);
      return;
    }

    if (!convertedPlans[curIdx]) {
      stack.push(prevItem);
      result.push(...stack.reverse());
      return;
    }

    const [curWork, curStartTime, curWorkTime] = convertedPlans[curIdx];
    const [prevWork, prevStartTime, prevWorkTime] = prevItem;
    const tempStack = [...stack];

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

  dfs(0, null, []);

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

// 집가서 확인
// function timeToMin(time) {
//   const [hh, mm] = time.split(":").map(Number);
//   return hh * 60 + mm;
// }

// function solution(plans) {
//   const answer = [];

//   const sortedPlans = plans
//     .map(([subject, time, count]) => [subject, timeToMin(time), Number(count)])
//     .sort((a, b) => a[1] - b[1]);

//   const stack = [];

//   for (let i = 0; i < sortedPlans.length - 1; i++) {
//     const [subject, time, count] = sortedPlans[i];

//     if (time + count <= sortedPlans[i + 1][1]) {
//       answer.push(subject);
//       let availableTime = sortedPlans[i + 1][1] - time - count;

//       while (stack.length) {
//         const [currentSubject, currentTime] = stack.pop();
//         if (currentTime <= availableTime) {
//           availableTime -= currentTime;
//           answer.push(currentSubject);
//         } else {
//           stack.push([currentSubject, currentTime - availableTime]);
//           break;
//         }
//       }
//     } else {
//       stack.push([subject, count - (sortedPlans[i + 1][1] - time)]);
//     }
//   }
//   answer.push(sortedPlans[sortedPlans.length - 1][0]);

//   while (stack.length) {
//     answer.push(stack.pop()[0]);
//   }
//   return answer;
// }
