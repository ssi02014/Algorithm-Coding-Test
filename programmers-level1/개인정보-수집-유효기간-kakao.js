function solution(today, terms, privacies) {
  const todayNum = +today.replace(/\./g, "");
  const splittedTerms = terms.map((el) => el.split(" "));

  const insertZero = (date) => (date < 10 ? `0${date}` : date);
  const calcDate = (privacyDate, validDate) => {
    let [year, month, date] = privacyDate.split(".").map(Number);

    month += validDate;
    date -= 1;

    // date이 1보다 작은 케이스
    if (date < 1) {
      date = 28;
      month -= 1;
    }

    // month가 12보다 큰 케이스
    if (month > 12) {
      year += Math.floor(month / 12);
      month %= 12;

      if (!month) {
        month = 12;
        year -= 1;
      }
    }

    return [year, month, date];
  };

  const privacyDates = privacies.map((privacy) => {
    const [privacyDate, privacyType] = privacy.split(" ");
    const validDate = +splittedTerms.find((term) => term[0] === privacyType)[1];

    const [year, month, date] = calcDate(privacyDate, validDate);

    return `${year}${insertZero(month)}${insertZero(date)}`;
  });

  return privacyDates.reduce((acc, date, i) => {
    return todayNum > +date ? [...acc, i + 1] : acc;
  }, []);
}
