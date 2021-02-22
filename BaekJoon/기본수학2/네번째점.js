const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

const input = [];

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () {
    const rect = [];
    const result = [];

    for (let i = 0; i < input.length; i++) {
        rect.push(input[i].split(" ").map(Number));
    }
    
    for (let i = 0; i < rect[0].length; i++) {
        if (rect[0][i] === rect[1][i]) result.push(rect[2][i]);
        if (rect[1][i] === rect[2][i]) result.push(rect[0][i]);
        if (rect[2][i] === rect[0][i]) result.push(rect[1][i]); 
    }
 
    console.log(result.join(" "));
});