# PROMISES

A PROMISE is an OBJECT that may produce a single value some time in the future. 

Either a RESOLVED value or a REJECTION. 

A PROMISE can be in one of three possible states: resolved, rejected or pending. 

Promises kind of serve the same function as callbacks. Promises are new with ES6. 

Promises are great for async JS; promises happen in the background. 

A Promise can either succeed or fail once -- this is useful for async behavior. 

Fetch returns a PROMISE. 

## Create a Promise

```js
const promise = new Promise((resolve, reject) => {
    if (true){
        resolve('This worked!')
    }
    reject('Error!')
})
```

## Execute a Promise

```js
promise.then(result => console.log(result))
```

## Chaining Promises

Using then() chained onto other then() methods to continue to do something to the resolved result. 

```js
promise
    .then(result => result + '!')
    .then(result2 => {
        console.log(result2)
    })
```

Using catch() to throw an error or to do something to the rejected promise result.

```js
promise
    .then(result => result + '!')
    .then(result2 => {
        console.log(result2)
    })
    .catch(() => console.log('error'))
```
