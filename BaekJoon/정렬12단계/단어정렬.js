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
    const words = [];
    const result = [];
    
    let value = '';

    for (let i = 0; i < N; i++) {
        words[i] = input[i];
    }

    for (let i = 0; i < N; i++) {
        value = words.shift();
        if (!result.includes(value)) result.push(value);
    }

    result.sort((a, b) => a.length - b.length || a.localeCompare(b));
    
    console.log(result.join("\n"));
});