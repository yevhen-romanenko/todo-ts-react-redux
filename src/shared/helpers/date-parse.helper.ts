export const dateParse = (expiredTaskDate: Date) => {
  const dedLineDateParse =
    expiredTaskDate.getFullYear() +
    '/' +
    (expiredTaskDate.getMonth() + 1) +
    '/' +
    expiredTaskDate.getDate();

  return dedLineDateParse;
};
