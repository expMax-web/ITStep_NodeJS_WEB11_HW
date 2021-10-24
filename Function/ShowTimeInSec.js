export const ShowTimeInSec = (hour, min, sec) => {
  let result = 0;
  let sum = 0;
  if (hour > 0) {
    hour = hour * 3600;
  }
  if (min > 0) {
    min = min * 60;
  }
  sum = hour + min + sec;
  result = `Время в секундах - ${sum}`;
  return result;
};
