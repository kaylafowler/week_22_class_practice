var Enumeration = function() {}

Enumeration.prototype.find = function(array, callback) {
  for(let item of array) {
    const isItem = callback(item);

    if(isItem) {
      return item;
    }
  }
}

Enumeration.prototype.map = function(array, callback){
  let resultArray = [];
  for(let item of array) {
    const newItem = callback(item);
    resultArray.push(newItem);
  }
  return resultArray;
}

Enumeration.prototype.filter = function(array, callback){
  let newArray = [];
  for(let item of array) {
    if (callback(item)) {
      newArray.push(item);
    }
  }
  return newArray;
}

Enumeration.prototype.some = function(array, callback) {
  for(let item of array) {
      if (callback(item)) {
        return true;
      };
  } return false;
}

Enumeration.prototype.every = function(array, callback) {
  let resultArray = [];
  for(let item of array) {
    let result = callback(item);
    resultArray.push(result);
  }
  for (let i of resultArray){
   if (i === false) {
     return false;
   }
 } return true;
}

Enumeration.prototype.reduce = function(array, callback) {
  let total = 0;
  for(let item of array) {
    total = callback(item, total);
  }return total;
}

module.exports = Enumeration;
