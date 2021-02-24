function solution(s) {
    const list = s.toLowerCase().split(" ");
    
    let result = '';
    
    result = list.map(str => {
        return str === "" ? "" : str.replace(str[0], str[0].toUpperCase());
    }).join(" ");
    
    return result
}