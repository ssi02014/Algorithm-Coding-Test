/**
 * new Map() – 맵을 만듭니다.
    map.set(key, value) – key를 이용해 value를 저장합니다.
    map.get(key) – key에 해당하는 값을 반환합니다. key가 존재하지 않으면 undefined를 반환합니다.
    map.has(key) – key가 존재하면 true, 존재하지 않으면 false를 반환합니다.
    map.delete(key) – key에 해당하는 값을 삭제합니다.
    map.clear() – 맵 안의 모든 요소를 제거합니다.
    map.size – 요소의 개수를 반환합니다.
 */
function solution(s) {
  const map = new Map();
  let max = Number.MIN_SAFE_INTEGER;
  let result = "";

  for (let el of s) {
    if (map.has(el)) map.set(el, map.get(el) + 1);
    else map.set(el, 1);
  }

  for (let [key, val] of map) {
    if (val > max) {
      max = val;
      result = key;
    }
  }

  return result;
}

function solution2(s) {
  const obj = {};
  let max = Number.MIN_SAFE_INTEGER;
  let result = "";

  for (let el of s) {
    obj[el] ? (obj[el] += 1) : (obj[el] = 1);
  }

  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      result = key;
    }
  }

  return result;
}
let str = "BACBACCACCBDEDE";
console.log(solution(str));
