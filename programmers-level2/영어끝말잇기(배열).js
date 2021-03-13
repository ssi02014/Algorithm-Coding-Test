function solution(n, words) {
    const usedWords = [];
    
    let answer = [0, 0];
    let [turn, player] = [0, 0];
    let [beforeWord, currentWord] = ["", ""];
    
    usedWords.push(words[0]);
    
    for (let i = 1; i < words.length; i++) {
        beforeWord = words[i-1];
        currentWord = words[i];
        
        if (beforeWord[beforeWord.length - 1] == currentWord[0]
            && !usedWords.includes(currentWord)) {
            
            usedWords.push(currentWord);
        } else {
            
            turn = parseInt(i / n) + 1;
            player = i % n + 1;
            
            return answer = [player, turn];
        }
    }
    return answer;
}
