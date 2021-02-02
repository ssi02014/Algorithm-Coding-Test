# Algorithm-Coding-Test
## 💥 프로그래머스 코딩테스트 연습
- [programmers] (https://programmers.co.kr/)
- [백준] (https://www.acmicpc.net/)

<br>

## ✨ 알고리즘 공부
1. [모두의 알고리즘-with 파이썬]
2. [이것이 코딩테스다-with 파이썬]
    - Greedy
    - Implement
    - DFS, BFS

<br>

## ⭐ JavaScript를 이용한 풀이
### 백준 입력값 받기
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
<br>
