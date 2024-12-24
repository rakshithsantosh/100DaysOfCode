//scope

//region where the variables are accessable

//Shadowing

function shadowing() {
  var a = 10;
  {
    let a = 20; // shadowing inner variables shodows the outer variable
    console.log(a);
  }
  console.log(a);
}

shadowing();

//shadowing let with var is illegal shadowing
//shadowing var with var is function scope it does not occur in blocks like loops of if statements

//hoisting in variables

//during memory allocation phase var is initialized with undefined
//but for let and const it is not initialized and its hosited in temporal dead zone

var d;
var j;

//var can be redeclared and let and const cannot be re declared

//cosnt has to be assigned a value at the time of declaration

//temporal dead zone

console.log(e);
let e;

// here e is hosuted but this code will throw an error as it is in temporal dead zone
//we are trying to access e before it is declared

//TBZ can also be refered as the period between the start of the block scope and the actual declaration
//accessing the variable in TBZ results in a reference error
