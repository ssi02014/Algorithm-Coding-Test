//예제  
/* 
    function solution(n, a) {
        for(let i = 0; i < n.length; i++) {
            if(n[i] == a) {
                return i;
            }
        }
    }

*/

// 7-1
/*
    function solution(n, a) {
    let answer = [];
    for(let i = 0; i < n.length; i++) {
        if(n[i] == a) {
            answer.push(i);
        }
    }
    return answer;
    }   
*/

//7-3
function solution(s_no, s_name, f_no) {
    for(let i in s_no){
        if(s_no[i] == f_no){
            return s_name[i];
        }  
    }
}
