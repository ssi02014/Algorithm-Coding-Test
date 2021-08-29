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
