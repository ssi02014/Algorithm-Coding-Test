// JSON.parse 활용(객체 풀이보다 효율적임)
function solution(s) {
  const set = new Set();
  const replacedString = s.replace(/({|})/g, (match) =>
    match === "{" ? "[" : "]"
  );
  const parsedTuples = JSON.parse(replacedString);

  parsedTuples.sort((a, b) => a.length - b.length);

  parsedTuples.forEach((tuple) => {
    tuple.forEach((el) => {
      set.add(el);
    });
  });

  return Array.from(set);
}

// 객체 활용
function solution(s) {
  const countObj = {};
  const result = [];

  s.replace(/({|})/g, "")
    .split(",")
    .forEach((el) => (countObj[el] = (countObj[el] || 0) + 1));

  for (const count in countObj) {
    result.push([+count, countObj[count]]);
  }

  return result.sort((a, b) => b[1] - a[1]).map((el) => el[0]);
}

// 첫 풀이
function solution(s) {
  const set = new Set();

  s.replace(/{/g, "")
    .split("}")
    .map((el) => {
      if (el[0] === ",") el = el.replace(",", "");
      return el.split(",");
    })
    .map((el) => el.map(Number))
    .map((el) => el.filter((el) => el !== 0))
    .filter((el) => el.length !== 0)
    .sort((a, b) => a.length - b.length)
    .map((el) => el.map((el) => set.add(el)));

  return Array.from(set);
}
