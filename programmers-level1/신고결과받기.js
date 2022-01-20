function solution(id_list, report, k) {
  const reportObj = createObj(id_list, []);
  const countObj = createObj(id_list, 0);
  const stopper = [];
  const result = [];

  for (let el of report) {
    const [user, reporter] = el.split(" ");

    if (reportObj[user].includes(reporter)) {
      continue;
    }
    reportObj[user].push(reporter);
    countObj[reporter] += 1;
  }

  for (let key in countObj) {
    if (countObj[key] >= k) {
      stopper.push(key);
    }
  }

  for (let key in reportObj) {
    let temp = 0;

    stopper.forEach((stop) => {
      if (reportObj[key].includes(stop)) {
        temp++;
      }
    });

    result.push(temp);
  }

  return result;

  function createObj(list, init) {
    return list.reduce((acc, cur) => {
      if (Array.isArray(init)) acc[cur] = [];
      else acc[cur] = init;
      return acc;
    }, {});
  }
}
