// 1
const greet = (name) => `hello ${name}`;

// 2
const add = (a, b) => a + b;

// 3
const check_even = (num) => (num % 2 === 0)

// 4
const return_first = (arr) => arr[0]

// 5
const caps_lock = (strng) => strng.toUpperCase()

// 6
10
5

// 7
function test() {
    let y = 10;
    console.log(y);
}

// 8
let x = 1;

function a() {
    console.log(x);
}

function b() {
    let x = 2;
    a();
}

b();

// 9
const inner = () => {
    const x = 5
}
inner()
console.log(x)

// 10
function add(count) {
    count++;
}

// 11
const sum = (arr) => {
    total = 0
    for (const num of arr) {
        total += num
    }
    return total
}

// 12
const square = (num) => num * num
const useSquare = (num1) => square(num1)

// 13
let x = 10;

function test(x) {
    return x * 2;
}

// console.log(test(5));


// 14
const evens = (arr) => {
    for (num of evens) {
        if (num % 2 === 0) {
            console.log(num)
        }
    }
}

// 15
let total = 0;

function addToTotal(num) {
    total += num;
}

function reset() {
    total = 0;
}

addToTotal(5);
addToTotal(10);
reset();
console.log(total);




// console.log(test("hello"));
