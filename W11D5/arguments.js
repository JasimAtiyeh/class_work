// sum 

function sum () {
    const args = Array.from(arguments);
    console.log(args);
    let total = 0;
    args.forEach ((num) => {
        total += num;
    })
    console.log(total);
}
// sum(1, 2, 3, 4);

function sum2 () {
    const arrayArgs = [...arguments];
    
    let total = 0;
    arrayArgs.forEach ((num) => {
        total += num;
    })
    console.log(total);
}
// sum2(1, 2, 3, 4);

// my bind with args
Function.prototype.myBind = function(context) {
  const boundArgs = [].slice.call(arguments, 1);
  const that = this
  return function() {
    const callTimeArgs = [].slice.call(arguments);
    return that.apply(context, boundArgs.concat(callTimeArgs));
  }
}

// my bind with args (with ...operator)

Function.prototype.myBind2 = function(context) {
    const boundArgs = [...arguments].slice(1);
    const that = this
    return function() {
        const callTimeArgs = [].slice.call(arguments);
        return that.apply(context, boundArgs.concat(callTimeArgs));
    }
}

// curriedSum 

function curriedSum (num) {
    const nums = [];

    function _curried (number) {
        nums.push(number);
        if (nums.length === num) {
            let sum = 0;
            nums.forEach(ele => sum += ele)
            return sum;
        } else {
            return _curried;
        }
    }
    return _curried;
}

// const test = curriedSum(4);
// console.log(test(5)(30)(20)(1)); // => 56

// Function.prototype.curry (with apply)

Function.prototype.curry = function(numArgs) {
  const args = [];
  const that = this;
  
  return function _curry(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      that.apply(null, args);
    } else {
      return _curry;
    }
  }
}

// Function.prototype.curry (with ...)

Function.prototype.curry = function(numArgs) {
  const args = [];
  const that = this;
  
  return function _curry(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      that.call(null, ...args);
    } else {
      return _curry;
    }
  }
}

const testFunk = function test() {
  console.log("you've completed all arguments");
}

const testyTest = testFunk.curry(4);
console.log(testyTest(5)(30)(20)(1)); // => 56

