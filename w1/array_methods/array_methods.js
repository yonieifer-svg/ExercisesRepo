// 2
const words = ["hello", "world"];
const upper = words.map(w => w.toUpperCase())

// 4
const nums = [1, 2, 3, 4, 5, 6]
const newNums = nums.filter(n => n % 2 === 0)

// 8
const prices = [90, 100, 110]
const ExpensiveTipp = prices.filter(p => p > 100).map(p => p += p * 0.1)

// 10
const arr = [10, 20, 30];
const mult = arr.reduce((acc, curr) => acc * curr, 1)
console.log(mult);
console.log(10*20*30);



