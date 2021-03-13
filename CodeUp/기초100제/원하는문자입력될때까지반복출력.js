const readline = require("readline"); 
const rl = readline.createInterface({ 
  input: process.stdin, 
  output: process.stdout, 
}); 

const input = [];

rl.on("line", function (line) {
  input.push(line); 
}).on("close", function () { 
  let list = input[0].split(" ");
  for(el of list) {
    if(el === 'q') {
        console.log(el)
        break;
    } 
    else console.log(el);
  }
});