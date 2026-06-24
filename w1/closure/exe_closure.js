// 1
const createLogger = () => () => console.log("hello");
const h = createLogger();
h();

// 2
const createGreeting = (name) => () => console.log("hello", name);
const b = createGreeting("dan");
b();

// 3
const createCounter = () => {
    let counter = 0;
    return () => {
        counter++;
        return counter;
    };
};
const a = createCounter();
console.log(a());

// 5
const createMultiplier = (x) => (num) => console.log(num * x);
const double = createMultiplier(2);
double(5);

// 6
const createAdder = (basic) => (add) => console.log(basic + add);
const add5 = createAdder(5);
add5(3);

// 7
const createSecret = () => {
    let secret = 5566;
    return {
        getSecret: () => secret,
        setSecret: (newSecret) => {
            secret = newSecret;
        },
    };
};
const { getSecret, setSecret } = createSecret();

// 8
const once = (fn) => {
    let hasRun = false;
    return () => {
        if (!hasRun) {
            fn();
            hasRun = true;
            return;
        }
        console.log("alredy run");
    };
};
const run = once(() => console.log("helloWorld"));
run();
run();

// 12
const createStack = () => {
    const lst = [];
    return {
        push: (val) => lst.push(val),
        pop: () => lst.pop(),
        peek: () => console.log(lst),
    };
};

// 13
const createIdGenerator = () => {
    let id = 0;
    return () => {
        id++;
        console.log(id);
    };
};
const gen = createIdGenerator();
gen();
gen();

// 15
const createBankAccount = (initialBalance) => {
    let balance = initialBalance
    return {
        deposit: (amount) => balance += amount,
        withdraw: (amount) => balance -= amount,
        getBalance: () => console.log(balance)
    }
}
const {deposit, withdraw, getBalance} = createBankAccount(0)
deposit(50)
getBalance()
withdraw(60)
getBalance()