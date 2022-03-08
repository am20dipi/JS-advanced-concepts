const promise = new Promise((resolve, reject) => {
    if (true){
        resolve('Resolved!')
    }
    reject('Error!')
})

promise.then(result => console.log(result))

// output => Resolved!
// output => Promise {<fulfilled>: }



const oneSecondPromise = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'Resolved after 1 second!')
})

oneSecondPromise.then(result => console.log(result))

// output => Resolved after 1 second!
// output => Promise {<fulfilled>: undefined}



// Real World Example

const urls = [
    'https://jsonplaceholder.typicode.com/todos',
    'https://jsonplaceholder.typicode.com/albums',
    'https://jsonplaceholder.typicode.com/posts'
]

Promise.all(urls.map(url => {
    return fetch(url).then(response => response.json())
})).then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
}).catch(() => console.log('error!'))


// FETCH returns a PROMISE!!!!!
// Promise either resolves or rejects => then we receive the data

