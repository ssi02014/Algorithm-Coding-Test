const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

const input = [];

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
    const cityCount = parseInt(input.shift());
    const distance = input.shift().split(" ").map(Number);
    const oilCost = input.shift().split(" ").map(Number);

    let sum = 0;
    let minCost = oilCost[0];

    for (let i = 0; i < cityCount - 1; i++) {
        if (oilCost[i] < minCost) minCost = oilCost[i];
        sum += (minCost * distance[i]);
    }
    console.log(sum);
});