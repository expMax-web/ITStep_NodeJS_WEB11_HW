export const CheckPerfectNumbersRange = (num1, num2) => {
  let resultArray = [];
  let a = 0;
  function perfectNum(num) {
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
  }
  for (let i = num1; i < num2 + 1; i++) {
    perfectNum(i);
    if (perfectNum(i) == "Число совершенное") {
      resultArray[a] = i;
      a++;
    }
  }
  return resultArray;
};
