function solution(bandage, health, attacks) {
  const [castTime, healingPerSecond, additionalHealing] = bandage;
  const maxTime = Math.max(...attacks.map((el) => el[0]));
  const maxHealth = health;

  let curHealth = maxHealth;
  let curTime = -1;
  let successCount = -1;
  let curAttackIdx = 0;

  const getRestoredHealth = (isConsecutiveSuccess) => {
    if (isConsecutiveSuccess) {
      return curHealth + additionalHealing + healingPerSecond;
    }
    return curHealth + healingPerSecond;
  };

  while (curTime < maxTime) {
    const [attackTime, damage] = attacks[curAttackIdx];

    curTime++;
    successCount++;

    if (attackTime === curTime) {
      curHealth -= damage;
      curAttackIdx++;
      successCount = 0;

      if (curHealth <= 0) return -1;
      continue;
    }

    // 연속 성공
    const isConsecutiveSuccess = successCount === castTime;

    // 회복된 최종 체력
    const restoredHealth = getRestoredHealth(isConsecutiveSuccess);

    // 최대 체력 이상 여부
    const isAboveMaxHealth = restoredHealth >= maxHealth;

    curHealth = isAboveMaxHealth ? maxHealth : restoredHealth;

    if (isConsecutiveSuccess) successCount = 0;
  }

  return curHealth;
}
