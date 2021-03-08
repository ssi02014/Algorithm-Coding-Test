const readline = require("readline"); 
const rl = readline.createInterface({ 
  input: process.stdin, 
  output: process.stdout, 
}); 

//전역 변수
const dx = [-1, 1, 0, 0, -1, -1, 1, 1]; 
const dy = [0, 0, -1, 1, -1, 1, -1, 1];

let input = [];
let map = [];
let [w, h] = [0, 0];

//solution
const solution = () => {
  let count = 0;

  [w, h] = input.shift().split(" ").map(Number);

  if (w === 0 & h === 0) return;
  else if (w === 1 && h === 1) count = parseInt(input.shift());
  else {
    assignment(h, w);

    for (let i = 0 ; i < h; i++) {
      for (let j = 0; j < w; j++) {
        if (map[i][j] === 1) {
          DFS(i, j);
          count++;
        }
      }
    }
  }

  console.log(count);
};

//그래프에 위치 넣어주는 함수
const assignment = (h, w) => {
  map = Array.from(Array(h), () => Array(w).fill(0));

  for(let i = 0; i < h; i++) {
    let temp = input[i].split(" ").map(Number);

    map[i] = temp;
  }

  input = input.slice(h);
  console.log(input);
};

//DFS
const DFS = (i, j) => {
  if (rangeCheck(i, j) && map[i][j] === 1) {
    map[i][j] = 0;

    for (let k = 0; k < dx.length; k++) {
      DFS(i + dx[k], j + dy[k]);
    }
  }
};

//배열 범위 체크
const rangeCheck = (i, j) => { 
  if (i >= 0 && i < h && j >= 0 && j < w) return true; 
  else return false;
};


rl.on("line", function (line) {
  input.push(line); 
}).on("close", function () {

  while (input.length !== 0) {
    solution();

    //초기화
    map = [];
  }
});