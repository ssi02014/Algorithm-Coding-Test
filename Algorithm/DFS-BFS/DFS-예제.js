const graph = {
    1: [2, 3, 8],
    2: [1, 7],
    3: [1, 4, 5],
    4: [3, 5],
    5: [3, 4],
    6: [7],
    7: [2, 6, 8],
    8: [1, 7],
};

//DFS는 큐1개 스택1개 필요
function dfs(graph, startNode) {
    let visitedQueue = []; // 탐색을 마친 노드들(queue)
    let needVisitStack = []; // 탐색을 해야 할 노드들(stack)

    needVisitStack.push(startNode);

    while (needVisitStack.length !== 0) {
        const node = needVisitStack.pop(); 

        if (!visitedQueue.includes(node)) {
            visitedQueue.push(node);
            needVisitStack = [...needVisitStack, ...graph[node]];
        }
    }
    return visitedQueue;
}

console.log(dfs(graph, 1));