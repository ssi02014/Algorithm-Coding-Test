const readline = require("readline"); 
const rl = readline.createInterface({ 
  input: process.stdin, 
  output: process.stdout, 
}); 

const input = [];

rl.on("line", function (line) {
  input.push(line); 
}).on("close", function () { 
  let str = input[0].split("");
  let N = parseInt(input[1]) + 2;
  let cursor = str.length;

  for(let i = 2; i < N; i++) {
    let command = input[i].split(" ");

    if (command[0] === 'P') {
        str.splice(cursor, 0, command[1]);
        cursor++;
    } 
    else if (command[0] === 'L') {
        cursor--;
        if (cursor < 0) cursor = 0;
    } 
    else if (command[0] === 'D') {
        cursor++;
        if (cursor > str.length) cursor = str.length;
    }
    else if (command[0] === 'B') {
        if (cursor === 0) continue;
        else {
            str.splice(cursor - 1, 1);
            cursor--;
        }
    }
  }
  console.log(str.join(""));
});