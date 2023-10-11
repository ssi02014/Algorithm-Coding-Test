function solution(people, limit) {
  let [start, end] = [0, people.length - 1];
  let result = 0;

  people.sort((a, b) => a - b);

  while (start <= end) {
    const sum = people[start] + people[end];

    if (sum <= limit) {
      start++;
      end--;
    } else {
      end--;
    }
    result++;
  }
  return result;
}
