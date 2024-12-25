//function declaration
function square(num) {
  return num * 2;
}

//function expression is when a function is assigned to a variable
//anonymous fucn is assigned to a variable
const square = function (num) {
  return num * 2;
};

//first class function is when a function is treated like a variable , it can be assigned to variable and passed as an argument and also returned from functions

function square(num) {
  return num * 2;
}

function displaysquare(square) {
  console.log("square is" + square(5));
}

//IIFE immediately invoked function expression
(function (num) {
  console.log("IIFE" + num);
})(4);

//spread or rest operator should be the last one

function logArgs(a, b, ...args) {
  //these are callad params
  console.log(a, b, args);
}

logArgs(1, 2, 3, 4, 5, 6, 7); //these are arguments

//callback function is a function passed into another function as an argument which is then invoked inside the outer fucntion

//arrow functions

const arrowsquare = (num) => num * 2;

//implicit return for one liner arrow function
