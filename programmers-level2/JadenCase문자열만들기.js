function solution(s) {
  const strList = s.toLowerCase().split(" ");

  let result = "";

  result = strList
    .map((str) => {
      return str === "" ? "" : str.replace(str[0], str[0].toUpperCase());
    })
    .join(" ");

  return result;
}

/*
    solution2 반복문

    function solution(s) {
        const list = s.toLowerCase().split(" ");
        
        for (let i = 0; i < list.length; i++) {
            if (list[i] === "") list[i] = "";
            else list[i] = list[i].replace(list[i][0], list[i][0].toUpperCase());
        }
        return list.join(" ");
    }
*/
function solution(s) {
  return s
    .toLowerCase()
    .split(" ")
    .map((str) => {
      return str === "" ? "" : str[0].toUpperCase() + str.slice(1);
    })
    .join(" ");
}
