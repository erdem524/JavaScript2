'use strict';
const sayThree = n => console.log(n, 'sayThree');
const sayFive = n => console.log(n, 'sayFive,');

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  for (i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);
    console.log(numbers);
  }
  numbers.forEach(e => {
    if (e % 15 === 0) {
      sayThree(e);
      sayFive(e);
    } else if (e % 3 === 0) {
      sayThree(e);
    } else if (e % 5 === 0) {
      sayFive(e);
    }
  });
}
threeFive(10, 15, sayThree, sayFive);
