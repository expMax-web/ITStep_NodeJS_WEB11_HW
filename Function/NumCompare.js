export const NumCompare = (num1, num2) => {
  let result = 0;
  if (num1 < num2) {
    result = -1;
  }
  if (num1 > num2) {
    result = 1;
  }
  if (num1 === num2) {
    result = 0;
  }
  return result;
};
