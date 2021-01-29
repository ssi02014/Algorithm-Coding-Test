const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

//전역 변수
let input = [];
let graph = []; 
let [dfsVisited, bfsVisited] = [[], []];
let [dfsResult, bfsResult] = [[], []]; 

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
        // input : ['4 5 1', '1 2', '1 3', '1 4', '2 4', '3 4']
        let [node, trunkLine, startNode] = input[0].split(" ").map((el) => parseInt(el)); 
        input = input.slice(1); 
        // input : ['1 2', '1 3', '1 4', '2 4', '3 4']

        //인접 행렬(2차 배열) 생성
        graph = Array.from(Array(node + 1), () => Array(node + 1).fill(0));
        for (let i of input) { 
            //i : 1 2 / 1 3 / 1 4 / 2 4 / 3 4 각각 x랑 y에 들어감
            let [x, y] = i.split(" ").map(el => parseInt(el)); 
            graph[x][y] = 1; 
            graph[y][x] = 1; 
        } 
        console.log(graph);

        dfsVisited = new Array(node + 1).fill(false); 
        bfsVisited = new Array(node + 1).fill(false); 

        //함수 실행
        dfs(startNode); 
        bfs(startNode); 

        //출력 
        console.log(dfsResult.join(" "));
        console.log(bfsResult.join(" ")); 
        
        process.exit(); 
    });


function dfs(v) { 
    dfsVisited[v] = true; 

    dfsResult.push(v);
    for (let i = 1; i < graph.length; i++) { 
        //graph에 1이 있고 방문하지 않았다면 재귀 호출 
        if (graph[v][i] === 1 && dfsVisited[i] === false) { 
            dfs(i); 
        } 
    }
    return dfsResult;
}

function bfs(v) {
    const needVisitQueue = [];
    needVisitQueue.push(v);

    bfsResult.push(v);

    while(needVisitQueue.length !== 0) {
        const node = needVisitQueue.shift();
        bfsVisited[node] = true;
        for (let i = 1; i < graph.length; i++) {
            if (graph[node][i] === 1 && bfsVisited[i] === false) {
                bfsVisited[i] = true;
                needVisitQueue.push(i);
                bfsResult.push(i);
            }
        }
    }
    return bfsResult;
}