const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

const input = [];

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
    let N = input[0].split("").map(Number);
    N.sort((a, b) => b - a);

    console.log(N.join(""));
});