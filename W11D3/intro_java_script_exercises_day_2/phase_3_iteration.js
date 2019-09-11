Array.prototype.bubbleSort = function () {
  let newArr = this.slice(0);
  let sorted = false;
  while (sorted === false) {
    sorted = true;
    let i = 1;
    newArr.myEach(function (ele) {
      if (ele > newArr[i]) {
        [newArr[i - 1], newArr[i]] = [newArr[i], newArr[i - 1]];
        sorted = false;
      }
      i++;
    });
  }
  return newArr;
}

String.prototype.subStrings = function () {
  let newArr = [];
  for(let idx1 = 0; idx1 < this.length - 1; idx1++) {
    for(let idx2 = idx1 + 1; idx2 <= this.length; idx2++) {
      newArr.push(this.slice(idx1, idx2));
    }
  }
  return newArr;
}

