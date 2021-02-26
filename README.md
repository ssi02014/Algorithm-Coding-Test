# 💻 Algorithm-Coding-Test
### 알고리즘/자료구조 및 코딩테스트 공부 저장소.
### 매일 1~2문제 꼭 풀고 commit 하기! 😤

<br />

### 😋 Commit Message Convention
1. 백준: Add(baekjoon): ~~~ '
2. 프로그래머스: Add(Level1): ~~~ '
3. 알고리즘: Add(greedy): ~~~ '
4. 구름: Add(goorm): ~~~ '

<br />

## 💥 코딩테스트 문제 사이트
- [programmers] : (https://programmers.co.kr/)
- [백준] : (https://www.acmicpc.net/)

<br />

## ✨ 알고리즘 공부
1. [이것이 코딩테스다-with 파이썬]
    - Greedy(그리디)
    - Implement(구현)
    - DFS, BFS
    - Recursion(재귀)
    - Sort(정렬)
    - Binary-Search(이진탐색)

<br />

## 🏃 백준) node.js 입력값 받기
```javascript
    const readline = require("readline"); 
    const rl = readline.createInterface({ 
        input: process.stdin, 
        output: process.stdout, 
    }); 

    //전역 변수
    let input = [];

    function solution() {
        //풀이 코드...
    }

    rl.on("line", function (line) {
        input.push(line); 
    }).on("close", function () { 
        
        //입력값 받는 코드...

        solution();
    })
```

<br />

## 🏃 프로그래머스) 함수형 코딩테스트
### ex) Level1 - 3진법 뒤집기
```javascript
    function solution(n) {
        const reverseTernary = n.toString(3).split('').reverse();
        let answer = 0;
        
        let sum ='';
        reverseTernary.forEach(n => sum += n);
        return answer = parseInt(sum, 3);
    }
```

<br />
