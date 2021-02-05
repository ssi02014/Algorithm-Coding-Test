const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

let input = [];

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
    let count = parseInt(input.shift());
    let result = [];

    for(let i = 0; i < count; i++) {
        result.push(parseInt(input[i]));
    }
    console.log(result.sort((a, b) => b - a));
})