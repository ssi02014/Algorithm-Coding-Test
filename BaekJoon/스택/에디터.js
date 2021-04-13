const readline = require("readline"); 
const rl = readline.createInterface({ 
  input: process.stdin, 
  output: process.stdout, 
}); 

const input = [];

rl.on("line", function (line) {
  input.push(line); 
}).on("close", function () { 
  const str = input[0].split("");
  const N = parseInt(input[1]);
  const left = [];
  const right = [];

  for (let i = 0; i < str.length; i++) {
      left.push(str[i]);
  }

  for (let i = 2; i < N + 2; i++) {
    let command = input[i].split(" ");

    if (command[0] === 'P') left.push(command[1]);
    else if (command[0] === 'L') {
        if (left.length !== 0) right.push(left.pop());
    } 
    else if (command[0] === 'D') {
        if (right.length !== 0) left.push(right.pop());
    }
    else if (command[0] === 'B') {
        if (left.length !== 0) left.pop();
    }
  }

  while (right.length !== 0) {
    left.push(right.pop());
  }

  console.log(left.join(""));
});