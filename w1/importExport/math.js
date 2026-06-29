const add = (a, b) => a + b

const greet = name => `hello ${name}`

const usersFactory = (name, age) => ({name, age})

const u1 = usersFactory("dan", 35)
const u2 = usersFactory("abc", 56)


export {add, greet, u1, u2}