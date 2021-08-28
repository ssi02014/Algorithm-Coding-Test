function solution(table, languages, preference) {
  const total = [];
  const maxPointIndex = [];
  const jobs = [];
  const result = [];
  let maxPoint = 0;

  table = table
    .map((el) => el.split(" "))
    .map((el) => {
      const length = el.length;
      const temp = [];

      jobs.push(el[0]);

      languages.map((language, i) => {
        el.indexOf(language) > 0
          ? temp.push((length - el.indexOf(language)) * preference[i])
          : temp.push(0);
      });

      total.push(temp.reduce((a, b) => a + b));
    });

  maxPoint = Math.max(...total);

  total.map((el, i) => el === maxPoint && maxPointIndex.push(i));
  maxPointIndex.map((idx) => result.push(jobs[idx]));

  return result.sort()[0];
}
