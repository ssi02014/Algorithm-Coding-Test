const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

let input = [];
let form = [];
let testCase = 0;
let formHeight, formWidth, cabbages;
formHeight = formWidth = cabbages = 0;

function solution() { 
    let earthworm = 0;

    for (let i = 0; i < formHeight; i++) { 
        for (let j = 0; j < formWidth; j++) { 
            if (form[i][j] === 1) { 
                dfs(i, j); 
                earthworm += 1;
            } 
        } 
    } 
    console.log(earthworm); 
}

function dfs(x, y) {
    if (rangeCheck(x, y)) {
        if (form[x][y] === 1) {
            form[x][y] = 2;
            dfs(x + 1, y);
            dfs(x, y + 1);
            dfs(x - 1, y);
            dfs(x, y - 1);
            return true;
        }
        return false;
    }
}

function rangeCheck(x, y) {
    if (x >= 0 && x < formHeight && y >= 0 && y < formWidth) return true;
    return false;
}

function createForm(input) {
    [formHeight, formWidth, cabbages] = input[0].split(" ").map((el) => parseInt(el));
    form = Array.from(Array(formHeight), () => new Array(formWidth).fill(0));

    for(let j = 1; j <= cabbages; j++) {
        let [x, y] = input[j].split(" ").map(el => parseInt(el));
        form[x][y] = 1;
    }
}

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
    testCase = input[0];
    input = input.slice(1);

    for (let i = 0; i < testCase; i++) {
        createForm(input)
        solution();
        input = input.slice(cabbages + 1);
    }
});