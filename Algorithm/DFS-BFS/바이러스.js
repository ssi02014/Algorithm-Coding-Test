const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

let input = [];
let graph = []; 
let dfsVisited = [];
let count = 0;

function dfs(node, startNode) { 
    dfsVisited[startNode] = true; 

    for (let i = 1; i < node; i++) { 
        if (graph[startNode][i] === 1 && dfsVisited[i] === false) { 
            dfs(node, i); 
        } 
    }
}

function adjacencyMatrix(node, input) {
    graph = Array.from(Array(node + 1), () => Array(node + 1).fill(0));

    for (let i of input) { 
        let [x, y] = i.split(" ").map(el => parseInt(el)); 
        graph[x][y] = 1; 
        graph[y][x] = 1; 
    }
}

//입력 및 출력
rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
    let [node, thunkLine] = input.map(el => parseInt(el));
    input = input.slice(2);

    dfsVisited = new Array(node + 1).fill(false); 

    //인접 행렬 생성
    adjacencyMatrix(node, input);

    //dfs 함수 실행
    dfs(node, 1); 

    //dfs 재귀 함수 호출 이후
    for( let i = 2; i <= node; i++) {
        if(dfsVisited[i] === true) {
            count += 1;
        }
    }

    //결과 출력
    console.log(count);

    //종료 
    process.exit(); 
});

