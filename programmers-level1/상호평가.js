function solution(scores) {
  const scoresLength = scores.length;
  let scoreLists = [];
  let idx = 0;
  
  while (idx < scoresLength) {
      scoreLists[idx] = scores.map((evaluation, i) => evaluation[idx]);
      idx++;
  }
  
  scoreLists = onFilter(scoreLists);
  return getGrade(scoreLists);
}

function onFilter(scoreLists) {
  return scoreLists.map((list, i) => {
      const max = Math.max(...list);
      const min = Math.min(...list);
      const filterArr = list.filter((el, j) => i !== j);
      
      list.map((score, j) => {
          if (i === j) {
              if ((score === max || score === min)) {
                  if (filterArr.includes(score)) filterArr.push(score);
              } else {
                  filterArr.push(score);
              }
          }
      });
      return filterArr;
  });
}

function getGrade(scoreLists) {
  let result = "";
  
  scoreLists.map(list => {
      const average = Math.floor(list.reduce((a, b) => a + b) / list.length);

      if (average < 50) result += "F";
      else if (average < 70) result += "D";
      else if (average < 80) result += "C";
      else if (average < 90) result += "B";
      else result += "A";
  });
  
  return result;
}