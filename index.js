Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line
    // newArray =  this.slice(0);
    for(let i = 0; i < this.length; i++){
      newArray.push(callback(this[i], i, this));
  }
  // Only change code above this line
  return newArray;
};
