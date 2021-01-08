const isCardDateValid = value => {
  const [month, year] = value.split('/');
  const currentYear = new String(new Date().getFullYear()).slice(2, 4);

  const isMonthCorrect = month >= 1 && month <= 12;
  const isYearCorrect = year >= currentYear;

  return isMonthCorrect && isYearCorrect;
};

export { isCardDateValid };
