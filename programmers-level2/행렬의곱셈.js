function solution(arr1, arr2) {
  const answer = [];
  let temp = [];
  let sum = 0;

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2[0].length; j++) {
      for (let k = 0; k < arr2.length; k++) {
        sum += arr1[i][k] * arr2[k][j];
      }
      temp.push(sum);
      sum = 0;
    }
    answer.push(temp);
    temp = [];
  }
  return answer;
}
