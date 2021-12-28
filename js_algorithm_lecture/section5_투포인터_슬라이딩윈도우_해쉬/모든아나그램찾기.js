function solution(s, t) {
  const obj = {};
  let result = 0;
  let str = "";

  for (let el of t) {
    if (obj[el]) obj[el] += 1;
    else obj[el] = 1;
  }

  for (let i = 0; i < s.length; i++) {
    str += s[i];

    if (i >= t.length) str = str.substring(1);
    if (str.length === t.length && compareObj(str, obj)) result++;
  }
  return result;
}

function compareObj(str, obj) {
  const tempObj = { ...obj };

  for (let el of str) {
    if (!tempObj[el]) return false;
    tempObj[el] -= 1;
  }
  return true;
}

function lectureSolution(s, t) {
  const [sMap, tMap] = [new Map(), new Map()];
  let result = 0;
  let len = t.length - 1;
  let left = 0;

  for (let el of t) {
    if (tMap.has(el)) tMap.set(el, tMap.get(el) + 1);
    else tMap.set(el, 1);
  }

  for (let i = 0; i < len; i++) {
    if (sMap.has(s[i])) sMap.set(s[i], sMap.get(s[i]) + 1);
    else sMap.set(s[i], 1);
  }

  for (let i = len; i < s.length; i++) {
    if (sMap.has(s[i])) sMap.set(s[i], sMap.get(s[i]) + 1);
    else sMap.set(s[i], 1);

    if (comparMaps(sMap, tMap)) result++;

    sMap.set(s[left], sMap.get(s[left]) - 1);

    if (!sMap.get(s[left])) sMap.delete(s[left]);
    left++;
  }

  return result;
}

function comparMaps(map1, map2) {
  if (map1.size !== map2.size) return false;

  for (let [key, value] of map1) {
    if (!map2.has(key) || map2.get(key) !== value) return false;
  }
  return true;
}

let a = "bacaAacba";
let b = "abc";
console.log(lectureSolution(a, b));
