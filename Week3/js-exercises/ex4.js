// Snippet
const x = 9; // The const global variable
function f1(val) {
  val = val + 1; // this function increases the value of argument val by 1 each time when it is called
  return val;
}
f1(x); // it is 10, f1 function call with argument x, but not change value of variable x

const y = { x: 9 }; //
function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y); // output is  { x: 10 }, coz f2 modifies the value of object property
console.log(y); //output is  { x: 10 },coz f2 modifies the value of object property

// The const declaration creates a read-only reference to a value.
//  It does not mean the value it holds is immutable, just that the variable identifier cannot be reassigned.
//  For instance, in the case where the content is an object, this means the object's
//  contents (e.g., its properties) can be altered.
