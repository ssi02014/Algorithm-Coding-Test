const readline = require("readline"); 
const rl = readline.createInterface({ 
  input: process.stdin, 
  output: process.stdout, 
}); 

const input = [];
const map = [];
let [N, M] = [0, 0];
let count = 0;
let move_x = [-1, 1, 0, 0, -1, -1, 1, 1]; 
let move_y = [0, 0,l -1, 1, -1, 1, -1, 1];

const rangeCheck = (x, y) => { 
  if (x >= 0 && x < N && y >= 0 && y < M) { 
    return true; 
  } else return fase;
};



rl.on("line", function (line) {
  input.push(line); 
}).on("close", function () { 
  for(let i = 0; i < input.length; i++) {
      [N, M] = input.shift().split(" ").map(Number);

      for(let j = 0; j < M; j++) {
          map[j] = input.shift().split(" ").map(Number);
      }
      for(let j = 0 ; j < N; j++) {
          for(let k =0; k < M; k++) {
            if (findBlock(i, j))  count++;
          }
      }
  }
  console.log(count);
});