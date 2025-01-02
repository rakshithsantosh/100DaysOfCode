//this depends on the context in which it is called

const user = {
  name: "john",
  age: 24,
  getDetails() {
    console.log(this.name);
    //in this case this refers to the immediate parent object in case of normal function
  },
  childObj: {
    name: "jane",
    getDetails() {
      console.log(this.name, "and", this.age);
      //in this case this refers to the child object
      //this.age will return undefined as age is not a property of child object and this refers to the immediate parent in case of normal function
    },
    getDetails2: () => {
      console.log(this);
      //in case of arrow function this refers to the parent function and if we dont have parent function then it refers to the global object
    },
  },
};

var calc = {
  total: 0,
  add(a) {
    this.total += a;
    return this;
  },
  subtract(a) {
    this.total -= a;
    return this;
  },
  multiply(a) {
    this.total *= a;
    return this;
  },
  divide(a) {
    this.total /= a;
    return this;
  },
};
