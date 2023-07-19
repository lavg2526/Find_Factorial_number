let number = 5;
const findFact = (num) => {
  if (num <= 0) {
    return 1;
  } else {
    return num * findFact(num - 1);
  }
};
console.log(findFact(number));
