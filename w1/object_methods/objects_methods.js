// 1
const objKeys = (obj) => Object.keys(obj);

// 2
const objItems = (obj) => Object.entries(obj);

// 3
const objPrinter = (obj) => {
    for (const key in obj) {
        console.log(key + ":", obj[key]);
    }
};

// 4
const grades = { math: 80, english: 90, science: 70 };
function avCalc(obj) {
    const values = Object.values(obj);
    if (values.length === 0) {
        return 0;
    }
    let sum = 0;
    for (const val of values) {
        sum += val;
    }
    return sum / values.length;
}

// 5
function assignObjects(obj1, obj2) {
    return Object.assign(obj1, obj2);
}

// 6
const dflt = { theme: "light", lang: "en" };
const usr = { lang: "he" };
const userSet = (df, us) => Object.assign(df, us);

// 7
function isInObj(obj, key) {
    return Object.hasOwn(obj, key);
}

// 8
const config = Object.freeze({ lang: "he" });
// config.lang = "en"

// 9
const createObject = (arr) => Object.fromEntries(arr);

// 10
const fruits = { apple: 10, banana: 5, mango: 20 };
const sale = (obj) =>
    Object.fromEntries(
        Object.entries(obj).map(([fruit, price]) => [fruit, price * 0.9]),
    );

// 11
const onlyNumbers = (obj) =>
    Object.fromEntries(
        Object.entries(obj).filter((field) => typeof field[1] === "number"),
    );

// 12
const copy = (obj) => {
    const newObj = { ...obj };
    return newObj;
};

// 13
const equalKeys = (obj1, obj2) => {
    const k1 = Object.keys(obj1)
    const k2 = Object.keys(obj2)

    if (k1.length === k2.length && k1.every(k => k2.includes(k))) {
        return true
    }
    return false
}




