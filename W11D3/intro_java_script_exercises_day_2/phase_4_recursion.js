function range(idx, end) {
  if (idx === end) return [idx];
  return [idx].concat(range(idx + 1, end));
}

function someRec(arr) {
  if (arr.length === 1) return arr[0];
  return arr[0] + someRec(arr.slice(1, arr.length));
}

function exponent(base, exp) {
  if (exp === 0) return 1;
  return base * exponent(base, exp - 1);
}

function exponent2(base, exp) {
  if (exp === 0) return 1;
  if (exp % 2 === 0) return (exponent2(base, (exp / 2)) ** 2);
  else return base * (exponent2(base, ((exp - 1) / 2)) ** 2);
}

function fibonacci(n) {
  if (n <= 2) return [1, 1].slice(0, n);
  let newFib = fibonacci(n - 1);
  newFib.push(newFib[newFib.length - 1] + newFib[newFib.length - 2]);
  return newFib;
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function deepDup(arr) {
  if (!Array.isArray(arr)) return arr;
  let clone = [];
  for (let i = 0; i < arr.length; i++) {
    clone.push(deepDup(arr[i]));
  }
  return clone;
}

function bsearch(arr, target) {
  if (arr.length === 0) return -1;
  let middleIndex = Math.floor(arr.length / 2);
  let left = arr.slice(0, middleIndex);
  let right = arr.slice(middleIndex, arr.length);
  if (arr[middleIndex] === target) {
    return middleIndex;
  } else if (arr[middleIndex] > target) {
    return bsearch(left, target);
  } else {
    let rightSearch = bsearch(right, target);
    return (rightSearch !== -1) ? middleIndex + rightSearch : -1;
  };
}

function mergeSort(arr) {
  if (arr.length === 1) return arr;
  let middleIndex = Math.floor(arr.length / 2);
  let left = arr.slice(0, middleIndex);
  let right = arr.slice(middleIndex, arr.length);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let merged = [];
  while (left.length !== 0 && right.length !== 0) {
    if (left[0] <= right[0]) {
      merged.push(left.shift());
    } else {
      merged.push(right.shift());
    }
  }
  return merged.concat(left).concat(right);
}

function subSets(arr) {
  if (arr.length === 1) return [arr];
  let newArr = [];
  for (let i = 1; i <= arr.length; i++) {
    newArr.push(arr.slice(0, i));
  }
  return newArr.concat(subSets(arr.slice(1, arr.length)));
}