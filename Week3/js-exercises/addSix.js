'use strict';
function createBase(baseNumber) {
  return function(N) {
    return baseNumber + N;
  };
}

const addSix = createBase(6);
addSix(9);
addSix(18);
addSix(30);
