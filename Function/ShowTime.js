export const ShowTime = (hour, min, sec) => {
  let result = "";
  if (hour == false || hour < 1) hour = `00`;
  if (min == false || min < 0) min = `00`;
  if (sec == false || sec < 0) sec = `00`;
  if (hour < 10 && hour > 0) hour = `0${hour}`;
  if (min < 10 && min > 0) min = `0${min}`;
  if (sec < 10 && sec > 0) sec = `0${sec}`;
  result = `${hour}:${min}:${sec}`;
  return result;
};
