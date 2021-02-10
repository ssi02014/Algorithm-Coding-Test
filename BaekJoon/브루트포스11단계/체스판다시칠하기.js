const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

const input = [];

const whiteStart = [
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
];

const blackStart = [
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
];


function whiteFirstPaint(chess, y, x) {
    let count = 0;
    
    for(let i = y; i < y + 8; i++) {
        for(let j = x; j < x + 8; j++) {
            if(chess[i][j] !== whiteStart[i - y][j - x]) count++;
        }
    }
    return count;
}

function blackFirstPaint(chess, y, x) {
    let count = 0;

    for(let i = y; i < y + 8; i++) {
        for(let j = x; j < x + 8; j++) {
            if(chess[i][j] !== blackStart[i - y][j - x]) count++;
        }
    }
    return count;
}

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
    const [N, M] = input.shift().split(" ").map(Number);
    const chess = input.splice(0);
    const minArr = [];

    for(let i = 0; i + 7 < N; i++) {
        for(let j = 0; j + 7 < M; j++) {
            minArr.push(whiteFirstPaint(chess, i, j));
            minArr.push(blackFirstPaint(chess, i, j));
        }
    }
    
    console.log(Math.min(...minArr));
}); 