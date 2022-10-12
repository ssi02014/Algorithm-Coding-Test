function solution(my_string) {
  return my_string
    .replace(/[^0-9]/g, " ")
    .split(" ")
    .map(Number)
    .reduce((acc, cur) => acc + cur, 0);
}
