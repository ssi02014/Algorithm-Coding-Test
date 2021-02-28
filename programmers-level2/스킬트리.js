function solution(skill, skill_trees) {
    const newArr = skill.split('');
    let str = '';
    let count = 0;
    
    for (let i = 0; i < skill_trees.length; i++) {
        str = skill_trees[i].split('')
            .filter(element => newArr.includes(element)).join('');

        if (str === skill.substring(0, str.length)) count++;
    }
    
    return count;
}