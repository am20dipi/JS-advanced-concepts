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