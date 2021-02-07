const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

const input = [];

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
    let [n, m, z] = input.shift().split(" ").map(Number);
    let count = 0;
    
    if(z <= m) count = -1;
    else count = Math.floor(n / (z - m)) + 1;

    console.log(count);
});