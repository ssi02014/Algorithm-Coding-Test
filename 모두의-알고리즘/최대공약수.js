// function solution(a, b) {
//     if(b % a == 0){
//         return a;
//     } else {
//         return solution(b, a%b);
//     }
// }

function solution(a, b){
    let i = Math.min(a, b);
    while(true){
        if(a % i == 0 && b % i ==0){
            return i;
        }
        i--;
    }
}


//a = 3
//b = 5