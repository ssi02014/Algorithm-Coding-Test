const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const n = +input[0];
  const students = input[2].split(" ").map(Number);
  const list = [];

  const insertStudent = (idx, student) => {
    list.splice(idx, 1, {
      student,
      recommend: 0,
      old: 0,
    });
  };

  const findIndex = (type, findData) => {
    return list.findIndex((item) => item[type] === findData);
  };

  for (const student of students) {
    const searchedStudentIdx = findIndex("student", student);

    list.forEach((el) => (el.old += 1));

    if (searchedStudentIdx !== -1) {
      list[searchedStudentIdx].recommend += 1;
      continue;
    }

    if (list.length < n) {
      insertStudent(list.length, student);
      continue;
    }

    // 가장 적은 추천 수
    const minRecommend = list.reduce(
      (acc, cur) => Math.min(acc, cur.recommend),
      Number.MAX_SAFE_INTEGER
    );

    // 가장 적은 추천 받은 학생들
    const minRecommendStudents = list.filter(
      (item) => item.recommend === minRecommend
    );

    // 가장 적은 추천 받은 학생 idx
    const minRecommendStudentIdx = list.findIndex(
      (item) => item.recommend === minRecommend
    );

    // 가장 적은 횟수를 받은 학생이 2이상이면 그중 가장 오래된 학생 제거
    if (minRecommendStudents.length > 1) {
      const maxOld = minRecommendStudents.reduce(
        (acc, cur) => Math.max(acc, cur.old),
        Number.MIN_SAFE_INTEGER
      );
      const oldStudentIdx = findIndex("old", maxOld);

      insertStudent(oldStudentIdx, student);
    } else {
      // 한명이라면 그냥 해당 학생 제거
      insertStudent(minRecommendStudentIdx, student);
    }
  }

  // 오름차순
  const sortedList = list
    .sort((a, b) => a.student - b.student)
    .map((el) => el.student);

  console.log(sortedList.join(" "));
});
