// 2
const words = ["hello", "world"];
const upper = words.map((w) => w.toUpperCase());

// 4
const nums = [1, 2, 3, 4, 5, 6];
const newNums = nums.filter((n) => n % 2 === 0);

// 8
const prices = [90, 100, 110];
const ExpensiveTipp = prices.filter((p) => p > 100).map((p) => (p += p * 0.1));

// 10
const arr = [10, 20, 30];
const mult = arr.reduce((acc, curr) => acc * curr, 1);

// 12
const users = [
    { name: "a", age: 15 },
    { name: "b", age: 25 },
    { name: "c", age: 35 },
];
const av = users.reduce((acc, user) => acc + user.age, 0) / users.length;

// 25
const nums1 = [1, 2, 4, 3, 5, 6];
const sortNums = [...nums1].sort((l, h) => h - l);

// 29
const sp = nums1.splice(1, 2);

// 32
const nestArr = [1, 2, [3, 4]];
const flatArr = nestArr.flat(1);

// 36
const evenDoubleSum = nums1
    .filter((num) => num % 2 === 0)
    .map((x) => x * 2)
    .reduce((acc, curr) => acc + curr, 0);

// 38
const food = [{ type: "fruit" }, { type: "veg" }, { type: "fruit" }];
const groupBy = food.reduce((acc, obj) => {
    if (!(obj.type in acc)) {
        acc[obj.type] = [];
    }
    acc[obj.type].push(obj);
    return acc
}, {});

// 39
const fruits = ["apple", "orange", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
    for (let j = 0; j < fruits.length; j++) {
        console.log(i, j);
        if (i !== j && fruits[i] === fruits[j]) {
            console.log("dups!");
        }
    }
}

// 41
const products = [
    { name: "Laptop", price: 800, inStock: true, category: "tech" },
    { name: "Phone", price: 400, inStock: false, category: "tech" },
    { name: "Shirt", price: 50, inStock: true, category: "fashion" },
];
const newProducts = products.filter(product => product.inStock && product.price > 100).reduce((acc, product) => acc + product.name, "")
console.log(newProducts);
