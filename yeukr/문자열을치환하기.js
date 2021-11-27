function solution(find, replace, source) {
  let result = "";
  let idx = -1;

  for (let i = 0; i < source.length; i++) {
    if (source[i] === find[0]) {
      let temp = "";

      for (let j = 0; j < find.length; j++) {
        temp += source[i + j];
      }

      if (temp === find) {
        idx = i + find.length;
        result += replace;
      }
    }

    if (i < idx) continue;
    else result += source[i];
  }

  return result;
}

// 제한 사항: Array, String, RegExp 관련 내장함수를 사용할 수 없습니다.
