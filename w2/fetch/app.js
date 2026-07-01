// // 1
// fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((response) => {

//         if (!response.ok) {
//             throw new Error(`error: ${response.status}`)
//         }

//         return response.json()
//     })
//     .then((post) => console.log(post.title))

// // 2
// fetch("https://jsonplaceholder.typicode.com/notfound")
//     .then(response => {

//         if (!response.ok) {
//             throw new Error(`error: ${response.status}`)
//         }

//         return response.json()
//     })
//     .then(post => console.log(post.status))
//     .catch(err => console.error(err))

// // 3
// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(response => {

//         if (!response.ok) {
//             throw new Error(`error: ${response.status}`)
//         }
//         return response.json()
//     })
//     .then(posts => {
//         for (const post of posts) {
//             console.log(post.title);
//         }
//     })
//     .catch(err => console.log(err))

// // 4
// fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     headers: {"content-type": "apliction/json"},
//     body: JSON.stringify({
//         "title": "כותרת חדשה",
//         "body": "תוכן הפוסט",
//         "userId": 1
//         })
//     })
//     .then(response => {

//         if (!response.ok) {
//             throw new Error(`error: ${response.status}`)
//         }

//         return response.json()
//     })
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

// // 5
// const getUserById = async (id) => {
//     try {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    
//     if (!response.ok) {
//         throw new Error(`error: ${response.status}`)
//     }

//     const data = await response.json()
//     console.log(data)
//     }
//     catch(err) {
//         console.log(err);
//     }
// }

// getUserById(1)

// // 6
// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then(user => user.json())
// .then(post => post.userId)
// .then(uid => console.log(uid))
// .catch(err => console.log(err))

// // 7
// const promise1 = fetch("https://jsonplaceholder.typicode.com/users/1")
// const promise2 = fetch("https://jsonplaceholder.typicode.com/posts/1")
// const promise3 = fetch("https://jsonplaceholder.typicode.com/todos/1")

// Promise.all([promise1, promise2, promise3])
// .then(response => Promise.all(response.map(res => res.json())))
// .then(data => console.log(data))
// .catch(err => console.log(err))



