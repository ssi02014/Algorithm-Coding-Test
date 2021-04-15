function solution(s, n) {
    const alpha = ['A', 'B', 'C', 'D', 'E', 'F', "G", 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const arr = s.split('');

    let result = "";
    arr.map(el => {
        if (el === " ") result += " "
        else if (alpha.indexOf(el) > 25) {
            result += alpha[(alpha.indexOf(el) + n - 26) % 26 + 26]
        }
        else {
            result += alpha[(alpha.indexOf(el) + n) % 26]
        }
    })
    
    return result;
    
}