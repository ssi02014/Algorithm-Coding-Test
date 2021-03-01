/* 풀이1 

function solution(nums) {
    const all = [];
    let temp = [];
    let answer = 0;
    let notPrime = 0;
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                temp.push(nums[i]);
                temp.push(nums[j]);
                temp.push(nums[k]);
                
                all.push(temp);
                
                temp = [];
            }
        }
    }
    
    for (let i = 0; i < all.length; i++) {
        let sum = 0;
        sum = all[i].reduce((a, b) => a + b);
        
        for (let j = 2; j < sum; j++) {
            if (sum % j === 0) {
                notPrime += 1;
                break;
            }
        }
    }
    
    return answer = all.length - notPrime;
} 

*/

// 풀이2
function solution(nums) {
    const allList = [];
    let notPrime = 0;
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                sum = nums[i] + nums[j] + nums[k];
                allList.push(sum);
                sum = 0;
            }
        }
    }
    
    allList.forEach(el => {
        for (let i = 2; i < el; i++) {
            if(el % i === 0) {
                notPrime++;
                break;
            }
        }
    });
    
    return allList.length - notPrime;
}