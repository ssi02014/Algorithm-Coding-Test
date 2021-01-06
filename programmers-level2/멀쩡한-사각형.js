function solution(w, h) {
    var answer = 0;
    
    return w * h - ((w + h) - greatestCommonDivisor(w,h));
}

function greatestCommonDivisor(minNum, maxNum) {
    return (maxNum % minNum) === 0 ?
        minNum : greatestCommonDivisor(maxNum, minNum % maxNum);
}