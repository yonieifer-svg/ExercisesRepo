// 1
const numbers = [1, 2, 3];
console.log(numbers);

// 2
const fruits = ["apple", "banana", "cherry"];
console.log(fruits[0], fruits[fruits.length - 1]);

// 3
fruits[1] = "mango";
console.log(fruits);

// 4
const orange = fruits.push("orange");
console.log(orange, fruits);

// 5
const last = fruits.pop();
console.log(last, fruits);

// 6
fruits.unshift("kiwi");
console.log(fruits);

// 7
fruits.shift();
console.log(fruits);

// 8
const arr = ["a", "b", "c", "d"];
arr.splice(1, 1);
console.log(arr);

// 9
arr.splice(1, 0, "x");
console.log(arr);

// 10
arr.splice(2, 1, "Y");
console.log(arr);

// 11
const nums_arr = [2, 4, 6, 8];
console.log(nums_arr.length);
console.log(nums_arr[nums_arr.length - 1]);

// 12
const mix = [55, "hello", false];
console.log(mix[0]);
console.log(mix[1]);
console.log(mix[2]);

// 13
const nums = [10, 20, 30];
for (const num of nums) {
    console.log(num);
}

// 14
const arr1 = [5, 10, 15];
let sum = 0;
for (const num1 of arr1) {
    sum += num1;
}

// 15
const arr2 = [3, 8, 12, 1];
for (const num2 of arr2) {
    if (num2 > 5) {
        console.log(num2);
    }
}

// 16
const person = {
    name: "dan",
    age: 56,
};
console.log(person);

// 17
console.log(person.name);
console.log(person.age);
console.log(person["name"]);
console.log(person["age"]);

// 18
person.city = "tel aviv";
person.name = "yossi";
console.log(person);

// 19
delete person.age;
console.log("age" in person)

// 20
const student = {
    name: "Yael",
    grades: [90, 80, 100],
};
console.log(student.grades[0])
student.grades.push(110)
student.grades.splice(0, 1)
console.log(student.grades)

// 21
const product = {
    name: "Laptop",
    price: 3500,
    inStock: true,
};
for (const key in product) {
    console.log(key + ": " + product[key])
}

// 22
const user = {
    username: "admin",
    role: "manager",
    active: true,
};
console.log()
