import { ShowTimeInSec } from "./ShowTimeInSec.js";
import { TimeSecReverse } from "./TimeSecReverse.js";

export const CalcTimeDifference = (hour1, min1, sec1, hour2, min2, sec2) => {
  let range1 = ShowTimeInSec(hour1, min1, sec1);
  let range2 = ShowTimeInSec(hour2, min2, sec2);
  let difference = range1.match(/\d+/) - range2.match(/\d+/);
  let result = TimeSecReverse(difference);
  return result;
};
