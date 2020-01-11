'use strict'
const fruitBasket = ['Apple', 'Lemon', 'Grapefruit', 'Lemon', 'Banana', 'Watermelon', 'Lemon'];

const fruits = fruitBasket.filter(fruit => {
     return fruit !== 'Lemon';
});
console.log(`My mom bought me a fruit basket, containing ${fruits}!`);
console.log(`My mom bought me a fruit basket, containing ` + fruits+ '!');

