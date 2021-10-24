export const GetFactorial = (num) => {
  let result = "1";
  for (let i = 2; i < num + 1; i++) {
    result = `${result} * ${i}`;
  }
  return result;
};
