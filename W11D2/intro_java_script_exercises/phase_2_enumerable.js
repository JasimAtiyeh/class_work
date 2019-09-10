Array.prototype.myEach = function(fun) {
  for(let i = 0; i < this.length; i++) {
    let ele = this[i];
    fun(ele);
  }
}

Array.prototype.myMap = function(fun) {
  let newArr = [];
  this.myEach(function(ele) {
    newArr.push(fun(ele));
  });
  return newArr;
}

// Array.prototype.myMap = function (fun) {
//   let newArr = [];
//   for (let i = 0; i < this.length; i++) {
//       let ele = this[i];
//       newArr.push(fun(ele));
//   }
//   return newArr;
// }

Array.prototype.myReduce = function (funk, val) {
  if (isNaN(val)) {
    var acc = this[0];
    var idx = 1;
    console.log("if statment");
  } else {
    var acc = val;
    var idx = 0;
    console.log("else statment");
  }
  for (; idx < this.length; idx++) {
    acc = funk(acc, this[idx]);
  }
  return acc;
}

Array.prototype.bubbleSort = function() {
  let newArr = this.slice(0);
  let sorted = false;
  while (sorted === false) {
    sorted = true;
    let i = 1;
    newArr.myEach(function(ele) {
      if (ele > newArr[i]) {
        [newArr[i - 1], newArr[i]] = [newArr[i], newArr[i - 1]];
        sorted = false;
      }
      i++;
    });
  }
  return newArr;
}
