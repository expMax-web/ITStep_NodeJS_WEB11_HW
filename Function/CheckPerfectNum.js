export const CheckPerfectNum = (num) => {
  let array = [];
  let sum = 0;
  for (let i = 1, j = 0; i < num; i++) {
    if (num % i === 0) {
      array[j] = i;
      j++;
    }
  }
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum === num ? "Число совершенное" : "Число НЕ совершенное";
};
