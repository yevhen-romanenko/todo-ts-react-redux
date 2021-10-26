export const dataCreate = () => {
  const today = new Date();
  const date =
    today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();
  const time =
    today.getHours() +
    ':' +
    (today.getMinutes() < 10 ? '0' : '') +
    today.getMinutes();
  const dateTime = date + ' ' + time;
  return dateTime;
};
