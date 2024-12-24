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
