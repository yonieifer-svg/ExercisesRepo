// 1
const age = 20;
if (age >= 18) {
    console.log("adult");
} else {
    console.log("kid");
}

// 2
const number = 7;
if (number % 2 === 0) {
    console.log("even");
} else {
    console.log("not even");
}

// 3
const isLoggedIn = true;
if (isLoggedIn) {
    console.log("welcome");
} else {
    console.log("please connect");
}

// 4
const num = -5;
if (num >= 0) {
    console.log("positive");
} else {
    console.log("negative");
}

// 5
const a = 10;
const b = 20;
if (a > b) {
    console.log("a greater");
} else if (a < b) {
    console.log("b greater");
} else {
    console.log("equal");
}

// 6
const password = "1234";
if (password === "1234") {
    console.log("approved access");
} else {
    console.log("wrong");
}

// 7
const x = 15;
if (10 <= x && x <= 20) {
    console.log("between");
} else {
    console.log("not between");
}

// 8
const grade = 83;
if (grade >= 90) {
    console.log("exelent");
} else if (grade >= 75) {
    console.log("good");
} else if (grade >= 60) {
    console.log("pass");
} else {
    console.log("fail");
}

// 9
const temp = 28;
if (temp > 30) {
    console.log("very hot, drink water");
} else if (temp > 20) {
    console.log("nice outside");
} else {
    console.log("cold, take a jacket");
}

// 10
const _age = 20;
const hasID = true;
if (_age >= 18 && hasID) {
    console.log("allowed");
} else {
    console.log("nop");
}

// 11
const isAdmin = false;
const isManager = true;
if (isAdmin || isManager) {
    console.log("approved access");
} else {
    console.log("nop");
}

// 12
const hasCard = false;
if (!hasCard) {
    console.log("no access");
} else {
    console.log("approved access");
}

// 13
const name = "";
if (!name) {
    console.log("guest");
} else {
    console.log(name);
}

// 14
const arr = [];
if (arr.length === 0) {
    console.log("empty");
} else {
    console.log("not empty");
}

// 15
const xx = "5";
const yy = 5;
console.log(xx == yy);
console.log(xx === yy);

// 16
const username = "admin";
const _password = "1234";
if (username === "admin" && _password === "1234") {
    console.log("welcome");
} else {
    console.log("nop");
}

// 17
const age1 = 67;
if (age1 < 18) {
    console.log("youth discount");
} else if (age1 >= 65) {
    console.log("pensioner discount");
} else {
    console.log("no discount");
}

// 18
const day = "monday";
switch (day) {
    case "saturday":
    case "friday":
        console.log("weekend");
        break;

    default:
        console.log("workday");
        break;
}

// 19
const total = 250;
if (total > 300) {
    console.log("free shipping");
} else if (total >= 150) {
    console.log("20ns shipping");
} else {
    console.log("40ns shipping");
}

// 20
const role = "editor";
switch (role) {
    case "admin":
        console.log("all");
        break;
    case "editor":
        console.log("edit only");
        break;
    case "viewer":
        console.log("read only");
        break;

    default:
        console.log("no access");
        break;
}
