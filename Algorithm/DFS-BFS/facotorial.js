//반복문 팩토리얼
function iterativeSolution(n) {
    let iterativeResult = 1;
    for (let i = 1; i <= n; i++) {
        iterativeResult *= i;
    }
    return iterativeResult;
}

//재귀함수 팩토리얼
function recursiveSolution(n) {
    if (n <= 1) {
        return 1;
    }
    return n * recursiveSolution(n - 1);
}
console.log(iterativeSolution(5));
console.log(recursiveSolution(5));