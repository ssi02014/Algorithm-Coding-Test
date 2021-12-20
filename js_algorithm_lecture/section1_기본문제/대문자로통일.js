function solution(s) {
  let result = "";
  for (let el of s) {
    result += el.toUpperCase();
  }
  return result;
}

function lectureSolution1(s) {
  let result = "";
  for (let el of s) {
    if (el === el.toLowerCase()) {
      result += el.toUpperCase();
    } else {
      result += el;
    }
  }
  return result;
}

function lectureSolution2(s) {
  let result = "";
  for (let el of s) {
    const ascii = el.charCodeAt();
    if (ascii >= 97 && ascii <= 122) {
      result += String.fromCharCode(ascii - 32);
    } else {
      result += el;
    }
  }
  return result;
}

let str = "ItisTimeToStudy";
console.log(lectureSolution2(str));
