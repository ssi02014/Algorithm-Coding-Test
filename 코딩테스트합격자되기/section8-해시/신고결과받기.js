/**
 * 프로그래머스 레벨1 신고 결과 받기
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/92334
 */
function solution(id_list, report, k) {
  const bannedUsers = {};

  const initializeReportHistory = () => {
    const reportHistory = {};

    for (let i = 0; i < id_list.length; i++) {
      const userId = id_list[i];

      reportHistory[userId] = { reporters: [], reportedCount: 0 };
    }

    return reportHistory;
  };

  const reportHistory = initializeReportHistory();

  // 1. 해당 유저가 신고한 유저를 체크
  // 2. 한 유저를 여러 번 신고할 수도 있지만, 동일한 유저에 대한 신고 횟수는 1회로 처리
  for (let i = 0; i < report.length; i++) {
    const [reporter, reportedUser] = report[i].split(" ");

    if (reportHistory[reporter].reporters.includes(reportedUser)) {
      continue;
    }

    reportHistory[reporter].reporters.push(reportedUser);
    reportHistory[reportedUser].reportedCount++;
  }

  for (let i = 0; i < id_list.length; i++) {
    const userId = id_list[i];

    if (reportHistory[userId].reportedCount >= k) {
      bannedUsers[userId] = 1;
    }
  }

  return id_list.map((userId) => {
    return reportHistory[userId].reporters.filter(
      (reporter) => bannedUsers[reporter]
    ).length;
  });
}
