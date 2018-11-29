'use strict';
//I'll start with my first question

var isInstructor =prompt("Are you an instructor?");
console.log(isInstructor + 'will tell me if they are an instructor');

var res = (isInstructor.toUpperCase());
console.log(isInstructor.toUpperCase());
console.log('ensures user response is all caps');
  if(res === 'YES') {
//if(isInstructor === 'YES') {
  document.write('Hello, Instructor!');
  alert('Hello, Instructor!');
} else {
  document.write('Hello teammate or stranger!');
  alert('Hello, Teammate!');
}
//alert('I did not hear you.');