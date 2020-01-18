// Snippet
let a = 10; // global variable declared by let
const x = (function() {
  a = 12; // global variable modified
  return function() {
    // returns outer schope` value

    alert(a); // alerts window the output of inner function
  };
})(); // IIFE it can directly execute the function.

x(); //the out put is 12, coz it declared by let .
// Functions are objects in JS,and can be asinged with variable,
// and this function expressions calls the function value
