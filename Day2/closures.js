//closure is the combinating of a function and the lexical environment within which that function was declared

function outer() {
  var name = "closure";
  function display() {
    console.log(name);
  }
  return display;
}

let myfun = outer();
myfun();

//everytime a new function is created in js it binds it with its lexical environment

//write a function that would allow let add = createBase(6)

function createBase(base) {
  return function (num) {
    console.log(base + num);
  };
}

function a() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i);
    }, i * 1000);
  }
}

//the above code will print 3 3 3 as var has function scope

//there are two solutions for this problem first is change it to let and second is using closure where we move the entire set timeout section into a function and call it inside the loop

//private counter with the help of closures

function count() {
  var counter = 0;

  function add(num) {
    counter += num;
  }

  function get() {
    return "counter is " + counter;
  }

  return {
    add,
    get,
  };
}

//Module patterns

var Module = (function () {
  function privateMethod() {
    //do something
  }

  return {
    publicMethod: function () {},
  };
})();
