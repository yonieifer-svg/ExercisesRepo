// 1
const nameFactory1 = (name) => ({name: name})

// 2
const nameFactory2 = (name) => ({name: name, 
    greet: () => `hello ${name}` 
})

// // 3
// const name1 = nameFactory2("a")
// console.log(name1.greet())

// 4
const nameFactory3 = (name, age) => ({name: name,
    age: age,
    greet: () => `hello ${name}` 
})

// 5
const nameFactory4 = (name, age) => ({
    name: name,
    age: age,
    adult: age >= 18,
    greet: () => `hello ${name}` 
})

// 6
const makeCounter = () => {
    let counter = 0
    return () => {
        counter++
        return counter
    }
    
}
const innerCounter = makeCounter()
console.log(innerCounter());
console.log(innerCounter());
console.log(innerCounter());

// 7
// const makeCounter = () => {
//     let counter = 0
//     return () => {
//         counter++
//         return counter
//     }
    
// }
// const innerCounter = makeCounter()
// console.log(innerCounter());
// console.log(innerCounter());
// console.log(innerCounter());

// 8
const makeCounter3 = (start) => {
    let counter = start
    return () => {
        counter++
        return counter
    }
    
}
const innerCounter3 = makeCounter3(5)
console.log(innerCounter3());
console.log(innerCounter3());
console.log(innerCounter3());

// 9
const makeCounter4 = (start) => {
    let counter = start
    return {
        inc: () => {
        counter++
        return counter
    },
        dec: () => {
            counter--
            return counter
        }
    }

}
const innerCounter4 = makeCounter4(5)
console.log(innerCounter4.inc());
console.log(innerCounter4.inc());
console.log(innerCounter4.dec());

// 10
const makeCounter5 = (start) => {
    let counter = start
    return {
        inc: () => {
        counter++
        return counter
        },
        dec: () => {
            counter--
            return counter
        },
        curr: () => counter
    }

}
const innerCounter5 = makeCounter5(15)
console.log(innerCounter5.inc());
console.log(innerCounter5.inc());
console.log(innerCounter5.dec());
console.log(innerCounter5.curr());

// 11
// 12
// כלול

// 13
const makeCounter6 = (start) => {
    let counter = start
    return {
        inc: () => {
        counter++
        return counter
        },
        dec: () => {
            counter--
            return counter
        },
        curr: () => counter,
        reset: () => {
            counter = 0
            return counter
        }
    }

}
const innerCounter6 = makeCounter6(15)
console.log(innerCounter6.inc());
console.log(innerCounter6.inc());
console.log(innerCounter6.dec());
console.log(innerCounter6.curr());
console.log(innerCounter6.reset());

// 14
const innerCounter60 = makeCounter6(7)
const innerCounter61 = makeCounter6(10)
console.log(innerCounter60.inc());
console.log(innerCounter61.inc());

// 15, 16, 17, 18
const productMaker = (name, price, stock=0) => {
    if (price < 0) {
        console.log("price under 0");
        return 
    }
    return {
        name: name,
        price: price,
        stock: stock,
        isAvailable: () => stock > 0,
    }
}

// 19
const mult = (num1) => (num2) => num1 * num2
const double = mult(2)
console.log(double(10));

// 20
const prefixAdder = (str) => `hello ${str}`
console.log(prefixAdder("drama"));

// 21, 22, 23
const notes = () => {
    const noteList = []
    return{
        add: (msg) => {
        noteList.push(msg)
        },
        show: () => noteList,
        del: (indx) => noteList.splice(indx, 1)
}
}

const myNotes = notes()
myNotes.add("0afghjkl")
myNotes.add("1afghjkl")
myNotes.add("2afghjkl")
myNotes.add("3afghjkl")
console.log(myNotes.show())
myNotes.del(2)
console.log(myNotes.show());

// 24
const userAccount = (name, age) => {
    let count = 0
    return {
        name: name,
        age: age,
        login: () => count++,
        enter: () => count
    }
}
const u1 = userAccount("abc", 55)
u1.login()
u1.login()
console.log(u1.enter());

// 25
// תרגיל לא מובן אין זמן להתעכב על הבנת תרגיל





