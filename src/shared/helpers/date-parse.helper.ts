export const dateParse = (expiredTaskDate: any) => {
  const dedLineDateParse =
    expiredTaskDate.getFullYear() +
    '/' +
    (expiredTaskDate.getMonth() + 1) +
    '/' +
    expiredTaskDate.getDate();
  expiredTaskDate = dedLineDateParse;
};
