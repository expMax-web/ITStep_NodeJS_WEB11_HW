export const TimeSecReverse = (sec) => {
  let hour = Math.floor(sec / 60 / 60);
  let min = Math.floor(sec / 60) - hour * 60;
  let seconds = sec % 60;

  function showTime(hour, min, seconds) {
    let result = "";
    if (hour == false || hour < 1) hour = `00`;
    if (min == false || min < 0) min = `00`;
    if (seconds == false || seconds < 0) seconds = `00`;
    if (hour < 10 && hour > 0) hour = `0${hour}`;
    if (min < 10 && min > 0) min = `0${min}`;
    if (seconds < 10 && seconds > 0) seconds = `0${seconds}`;
    result = `${hour}:${min}:${seconds}`;
    return result;
  }
  let time = showTime(hour, min, seconds);
  return time;
};
