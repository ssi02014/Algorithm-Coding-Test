const readline = require("readline"); 
const rl = readline.createInterface({ 
  input: process.stdin, 
  output: process.stdout, 
}); 

const input = [];

rl.on("line", function (line) {
  input.push(line); 
}).on("close", function () { 
    const N = parseInt(input.shift());
    const M = [];
    const queue = [];
    const result = [];

    for (let i = 0; i < N; i++) {
       M[i] = input[i].split(" ");
    };

    for (let i = 0; i < M.length; i++) {
        if (M[i][0] === "push") queue.push(M[i][1]);
        else if (M[i][0] === "front") queue.length === 0 ? result.push(-1) : result.push(queue[0]);
        else if (M[i][0] === "back") queue.length === 0 ? result.push(-1) : result.push(queue[queue.length - 1]);
        else if (M[i][0] === "size") result.push(queue.length);
        else if (M[i][0] === "empty") queue.length === 0 ? result.push(1) : result.push(0);
        else queue.length === 0 ? result.push(-1) : result.push(queue.shift());
    }
    console.log(result.join("\n"));
});