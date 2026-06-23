import input from "analiza-sync";

// 1
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2
for (let i = 10; i > 0; i--) {
    console.log(i);
}

// 3
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (const num of numbers) {
    sum += num;
}
console.log(sum);

// 4
const names = ["דנה", "יוסי", "מיכל", "רון"];
for (const name of names) {
    console.log(name);
}

// 5
const numbers1 = [2, 5, 8, 11, 14, 17, 20];
for (const num of numbers1) {
    if (num % 2 === 0) {
        console.log(num);
    }
}

// 6
const numbers2 = [3, 99, 12, 45, 78];
let big = numbers2[0];
for (const num of numbers2) {
    if (num > big) {
        big = num;
    }
}
console.log(big);

// 7
const word = "javascript";
const lst = [];
for (const char of word) {
    lst.push(char);
}
console.log(lst);

// 8
const numbers3 = [1, 2, 3, 4];
for (const num of numbers3) {
    console.log(num * 2);
}

// 9
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// 10
let put = "";
while (put !== "stop") {
    put = input("enter: ");
}

// 11
let num1 = "";
while (num1 != 0) {
    let sum = input("enter num: ");
    sum += num;
}

// 12
const secret = 7;
let user_choice = "";
while (user_choice != secret) {
    user_choice = input("enter num: ");
}

// 13
let x = 1;
while (x < 20) {
    console.log(x);
    x++;
}

// 14
let password = "";
while (password != "1234") {
    password = input("enter password: ");
}

// 15
let count = 0;
do {
    count++;
} while (count < 0);
console.log(count);

// 16
let choice;
while (choice != "exit") {
    choice = input("enter choice: ");
}

// 17
const numbers = [1, 3, 7, 9, 15, 2];
for (const num2 in numbers) {
    if (num2 > 10) {
        break;
    }
}

// 18
const numbers = [5, -1, 8, -3, 10];
for (const num3 in numbers) {
    if (num3 < 0) {
        continue;
    }
    console.log(num3);
}

// 19
const ages = [12, 15, 18, 21, 25];
for (const age of ages) {
    if (age >= 18) {
        break;
    }
}

// 20
const arr = [10, 20, 30, 40, 50];
for (const num4 of arr) {
    console.log(num4);
}

// 21
let sum;
const numbers = [1, 2, 3, 4, 5, 6];
for (const num of numbers) {
    if (num % 2 === 0) {
        sum += num;
    }
}
console.log(sum);

// 22
const target = 25;
const numbers = [10, 15, 20, 25, 30];
let result = false;
for (const num of numbers) {
    if (num === target) {
        result = true;
        console.log(result);
        break;
    }
}

// 23
const word = "hello world";
for (const letter of word) {
    console.log(letter.toUpperCase());
}

// 24
const numbers = [2, 4, 6, 8, 10, 12];
for (const num of numbers) {
    if (num % 2 === 0 && num > 8) {
        break;
    }
}

// 25
const students = [
    { name: "דנה", grade: 55 },
    { name: "יוסי", grade: 90 },
    { name: "מיכל", grade: 78 },
    { name: "רון", grade: 45 },
];
for (const student of students) {
    if (student.grade === 100) {
        break
    }
    else if (student.grade > 60) {
    console.log(student.name)
    }
}
