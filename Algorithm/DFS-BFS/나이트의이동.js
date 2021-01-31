const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

const [dx, dy] = [[-1, -2, -2, -1, 1, 2, 2, 1], [-2, -1, 1, 2, -2, -1, 1, 2]]; 
let input = [];
let chessBoard = [];
let testCase = 0;
let chessBoardSide = 0;

function bfs(startX, startY, targetX, targetY) {
    let queue = [];
    
    chessBoard[startX][startY] = 1;
    chessBoard[targetX][targetY] = 2;

    let queue = [startX, startY];
    let count = 0;
}

function rangeCheck(x, y) {
    if (x >= 0 && x < chessBoardSide && y >= 0 && y < chessBoardSide) {
        return true;
    }
    return false;
}

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
    testCase = parseInt(input.shift());
    for (let i = 0; i < testCase; i++) {
        chessBoardSide = parseInt(input.shift());
        chessBoard = Array.from(Array(chessBoardSide), () => Array(chessBoardSide).fill(0));

        let [startX, startY] = input.shift().split(" ").map(el => parseInt(el));
        let [targetX, targetY] = input.shift().split(" ").map(el => parseInt(el));

        bfs(startX, startY, targetX, targetY);
    }
});