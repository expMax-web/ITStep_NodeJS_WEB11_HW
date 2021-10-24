export const CalcArea = (a, b) => {
  let result = 0;
  if (a > 0 && b > 0) {
    result = a * b;
  }
  if (a > 0 && b <= 0) {
    result = a * a;
  }
  if (b > 0 && a <= 0) {
    result = b * b;
  }
  return result;
};
