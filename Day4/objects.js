const user = {
  name: "john",
  age: 24,
  "likes birds": true,
};

delete user.age;

//how to add dynamic key value paor to the object

const key = "likes birds";
const value = true;

const user2 = {
  [key]: value,
};

//how to convert object to string
const user3 = {
  name: "john",
  age: 24,
};

const strObj = JSON.stringify(user3);

//how to convert it back to object
const obj = JSON.parse(strObj);

//where are these used?

//to store these in local storage

localStorage.setItem("user", strObj);

//when one object is assigned to another reference is passed not the copy this is shallow copy

//deep copy when there is no reference

const objclone = Object.assign({}, user3);
