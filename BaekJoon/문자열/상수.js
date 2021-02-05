const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

const input = [];

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
    const numList = input.shift().split(" ");
    let reverse = [];

    for (let i = 0; i < numList.length; i++) {
        reverse.push(parseInt(numList[i].split("").reverse().join("")));
    }
    return console.log(Math.max(...reverse));
});
