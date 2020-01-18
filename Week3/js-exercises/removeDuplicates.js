'use strict';
// 1
function removeDuplicates() {
  return letters.filter((a, b) => letters.indexOf(a) === b);
  x(letters);
}
const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];
console.log(removeDuplicates(letters));
// 2

function removeDuplicates() {
  return [...new Set(letters)];
}
const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];
console.log(removeDuplicates(letters));
