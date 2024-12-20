//reduce((acc,curr,i,arr)={},intitialValue)

Array.prototype.myReduce = function (cb, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, arr) : this[i];
  }
  return accumulator;
};
