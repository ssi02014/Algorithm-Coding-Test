function solution(str1, str2) {
  const [obj1, obj2] = [{}, {}];

  if (str1.length !== str2.length) return "NO";

  for (let el of str1) {
    obj1[el] ? (obj1[el] += 1) : (obj1[el] = 1);
  }

  for (let el of str2) {
    obj2[el] ? (obj2[el] += 1) : (obj2[el] = 1);
  }

  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) return "NO";
  }
  return "YES";
}

function lectureSolution(str1, str2) {
  let map = new Map();

  if (str1.length !== str2.length) return "NO";

  for (let el of str1) {
    if (map.has(el)) map.set(el, map.get(el) + 1);
    else map.set(el, 1);
  }

  for (let el of str2) {
    if (!map.has(el) || !map.get(el)) return "NO";
    else map.set(el, map.get(el) - 1);
  }

  return "YES";
}

let a = "AaAeCe";
let b = "aeeACA";
// let a = "abaCC";
// let b = "Caaab";
console.log(lectureSolution(a, b));
