// example of currying

function add(a, b) {
  return a + b;
}

function curriedAdd(a) {
  return function (b) {
    return a + b;
  };
}

//example with currying 3 parameters
function curriedAddThree(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

//another example
function evaluate(operation) {
  return function (a) {
    return function (b) {
      if (operation === "sum") return a + b;
      else if (operation === "sub") return a - b;
      else if (operation === "mul") return a * b;
      else if (operation === "div") return a / b;
      else return "Invalid Operation";
    };
  };
}

//infinite currying
function infiniteAdd(a) {
  return function (b) {
    if (b) return infiniteAdd(a + b);
    else return a;
  };
}

infiniteAdd(1)(2)(3)(4);

//currying vs partial application
function sum(a) {
  return function (b, c) {
    return a + b + c;
  };
}

//in above function sum(1)(2,3) is partial application

//real world use case of currying

//dom manipulation

function manipulate(id) {
  return function (content) {
    document.getElementById(id).innerHTML = content;
  };
}

//in the above function we can initialize the id once and then we can manipulate the content multiple times

//impliment a function which takes in a function and converts it to a curried function

function implimentCurrying(fun) {
  return function curriedfunc(...args) {
    if (args.length > fun.length) {
      return fun(...args);
    } else {
      return function (...next) {
        return curriedfunc(...args, ...next);
      };
    }
  };
}
