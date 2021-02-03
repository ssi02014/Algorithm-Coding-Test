const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

const input = [];

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
    const numberCount = parseInt(input.shift());
    const numberList = input.shift().split("").map(el => parseInt(el));

    let result = 0;
    result = numberList.reduce((a, b) => a + b);

    console.log(result);
})