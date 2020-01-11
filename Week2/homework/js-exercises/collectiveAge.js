// 'use strict'
const hackYourFutureMembers = [
  { name: 'Wouter', age: 33 },
  { name: 'Federico', age: 32 },
  { name: 'Noer', age: 27 },
  { name: 'Tjebbe', age: 22 },
];
const ages = hackYourFutureMembers.map((member => member.age));
const total = ages.reduce(function (previous, next) {
    return previous + next;
});
console.log(`The collective age of the HYF team is: ` +total);
