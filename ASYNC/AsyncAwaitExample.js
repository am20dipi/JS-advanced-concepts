// This is a Promise. The ES6 way to do Promises. 
movePlayer(100, "Left")
    .then(() => movePlayer(400, "Left"))
    ,then(() => movePlayer(100, "Right"))




// first declare the function as "async" using the "async" keyword
async function playerStart(){
    // the "await" keyword pauses the function until I have something for you.
    // we can use "await" in front of any function that returns a Promise.
    // async await allows us to assign variables and store the result of each async behavior.
    const firstMove = await movePlayer(100, 'Left')
    // pause

    await movePlayer(400, 'Left')
    // pause

    await movePlayer(40, 'Right')
    // pause

    await movePlayer(550, 'Left')
    // pause 
}


// ASYNC AWAIT with fetch pointing to an endpoint
async function fetchUsers(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data)
}

fetchUsers()
// Promise { <pending> }
// output => users object



// ASYNC AWAIT + Promise.all()

const urls = [
    'https://jsonplaceholder.typicode.com/todos',
    'https://jsonplaceholder.typicode.com/albums',
    'https://jsonplaceholder.typicode.com/posts'
]

const getData = async function(){
    const [ todos, albums, posts ] = await Promise.all(urls.map(url => {
        fetch(url).then(response => response.json())
    }))
    console.log(todos)
    console.log(albums)
    console.log(posts)
}

getData()
// Promise { <pending> }
// output => todos object
// output => albums object
// output => posts object


// ASYNC AWAIT + try block + catch block

const getData = async function(){
    try {
        const [ todos, albums, posts ] = await Promise.all(urls.map(url => {
            fetch(url).then(response => response.json())
        }))
        console.log(todos)
        console.log(albums)
        console.log(posts)
    } catch {
        console.log("Error!")
    }
}

getData()