const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

const input = [];

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
    let [N, K] = input.shift().split(" ").map(Number);
    let coinList = input.splice(0).map(Number);
    let useCoins = [];
    let count = 0;

    for (let i = 0; i < N; i++) {
        if(coinList[i] < K) {
            useCoins.push(coinList[i]);
        }
    }
    useCoins = useCoins.sort((a, b) => b - a);
    
    for(let coin of useCoins) {
        count += parseInt(K / coin);
        K = K % coin;
    }
    console.log(count);
});