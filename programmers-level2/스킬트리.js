function solution(skill, skill_trees) {
  const skillArr = skill.split("");
  let result = 0;

  skill_trees.forEach((skillTree) => {
    const skillStr = skillTree
      .split("")
      .filter((element) => skillArr.includes(element))
      .join("");
    const slicedSkill = skill.slice(0, skillStr.length);

    if (skillStr === slicedSkill) {
      result++;
    }
  });

  return result;
}
