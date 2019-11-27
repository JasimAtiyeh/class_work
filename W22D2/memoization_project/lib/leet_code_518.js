// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

// Input: amount = 5, coins = [1, 2, 5]
// Output: 4
// Explanation: there are four ways to make up the amount:
// 5 = 5
// 5 = 2 + 2 + 1
// 5 = 2 + 1 + 1 + 1
// 5 = 1 + 1 + 1 + 1 + 1

var change = function (amount, coins) {
  let output;
  let arr = [];
  for (let i = 0; i < coins.length; i++) {
    while (sum(arr) < amount) {
      arr.push(coins[i]);
    }
  }
};

var sum = arr => arr.reduce((a, b) => a + b);