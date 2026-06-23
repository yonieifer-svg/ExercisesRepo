// 1
const three_times = (num) => num * 3;

// 2
const len = (chars) => chars.length;

// 3
const is_positive = (num) => {
    if (num > 0) {
        return "positive";
    } else if (num < 0) {
        return "negative";
    } else return "zero";
};

// 4
const biggest = (a, b) => Math.max(a, b);

// 5
const len_arr = (arr) => arr.length;

// 11
const minimum = (arr) => Math.min(arr);

// 12
const div = (a, b) => a % b === 0;

// 13
const join = (arr) => {
    let sen = "";
    for (const word of arr) {
        sen += word;
    }
    return sen;
};

// 15
const all_to_num = (num) => {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum += i;
    }
    return sum;
};

// 16
const no_duplicates = (arr) => {
    let new_arr = [];
    for (const item of arr) {
        if (!new_arr.includes(item)) {
            new_arr.push(item);
        }
    }
    return new_arr;
};

// 18
const sum_evens = (arr) => {
    let sum = 0;
    for (const num of arr) {
        if (num % 2 === 0) {
            sum += num;
        }
    }
    return sum;
};

// 20



console.log(sum_evens([1, 2, 2, 3, 3, 5]));
