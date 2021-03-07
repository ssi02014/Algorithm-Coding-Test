function solution(people, limit) {
    const sortPeoples = people.sort((a, b) => b - a);
    
    let answer = 0;
    let [start, end] = [0, sortPeoples.length - 1]
    
    while (start < end) {
        let sum = sortPeoples[start] + sortPeoples[end];
        
        if (sum > limit) start++;
        else {
            start++;
            end--;
        }
        answer++;
    }
    
    if (start == end) answer++;
    
    return answer;
}