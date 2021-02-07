const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

const input = [];

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
    let X = parseInt(input.shift());
    let count = 0;

    while(X > 0) {
        count++; //1 2 3 4 5 6
        X = X - count; //14-1, 13-2, 11-3, 8-4, 4-5 ->count = 5, X = -1
    }

    if(count % 2 === 0) {
        console.log(`${count + X}/${1 + -X}`)
    } else {
        console.log(`${1 + -X}/${count + X}`)
    }
});