//filter((num,i,arr)=>{})

Array.prototype.myFilter = function (cb) {
  temp = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }

  return temp;
};
