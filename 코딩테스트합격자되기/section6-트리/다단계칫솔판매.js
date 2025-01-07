/**
 * 프로그래머스 레벨3 다단계 칫솔 판매
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/77486
 */
function solution(enroll, referral, seller, amount) {
  // parent(부모 관리), total(총 누적 수익금) 객체 초기화 함수
  const initialize = () => {
    const parent = {};
    const total = {};

    for (let i = 0; i < enroll.length; i++) {
      parent[enroll[i]] = referral[i];
      total[enroll[i]] = 0;
    }

    return { parent, total };
  };

  const { parent, total } = initialize();

  // 수익 분배
  const shareRevenue = (name, profit) => {
    if (!name || name === "-") return;

    const distributions = Math.floor(profit / 10);

    // 분배금이 1미만이면 수익 전체를 누적 후 분배 종료
    if (distributions < 1) {
      total[name] += profit;
      return;
    }

    // 분배금이 1이상이면 (수익 - 분배금)만큼 누적 후
    total[name] += profit - distributions;

    // 부모 수익 분배
    shareRevenue(parent[name], distributions);
  };

  for (let i = 0; i < seller.length; i++) {
    const profit = amount[i] * 100; // profit: 수익
    const distributions = Math.floor(profit / 10); // distributions: 분배금

    total[seller[i]] += profit - distributions;

    // 부모가 있을 경우 수익 분배
    if (parent[seller[i]]) {
      shareRevenue(parent[seller[i]], distributions);
    }
  }

  return enroll.map((el) => total[el]);
}
