function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    let queue = [];
    let queueSum = 0;
    let currentTruck = truck_weights.shift();
    
    for(let i = 0; i < bridge_length; i++) {
        queue.push(0);
    }
    
    queue.unshift(currentTruck);
    queue.pop();
    
    queueSum += currentTruck;
    answer++;
    
    while (queueSum) {
        queueSum -= queue.pop();
        currentTruck = truck_weights.shift();
        
        if (currentTruck + queueSum <= weight) {
            queue.unshift(currentTruck);
            queueSum += currentTruck;
        } else {
            queue.unshift(0);
            truck_weights.unshift(currentTruck);
        }
        answer++;
    }
    return answer;
}