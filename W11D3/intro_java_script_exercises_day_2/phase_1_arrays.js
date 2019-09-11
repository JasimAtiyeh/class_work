Array.prototype.unique = function() {
  let arr = [];
  this.forEach(function(ele) {
    if (!arr.includes(ele)) {
      arr.push(ele);
    }
  })
  return arr;
}

Array.prototype.toSum = function() {
  let arr = [];
  for (let i = 0; i < this.length - 1; i++) {
    for (let n = i + 1; n < this.length; n++) {
      if (this[i] + this[n] === 0) {
        arr.push([i, n]);
      }
    }
  }
  return arr;
}

Array.prototype.transpose = function() {
  let arr = [];
  for (let i = 0; i < this.length - 1; i++) {
    let subarr = [];
    for (let n = 0; n < this.length; n++) {
      subarr.push(this[n][i]);
    }
    arr.push(subarr);
  }
  return arr;
}

