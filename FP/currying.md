# CURRYING

* Transforming a function that takes multiple parameters into multiple functions that each take a single parameter. 

Example

```js
// old way
const multiply = (a,b) => a * b

// currying
const curriedMultiply = (a) => (b) => a*b
curriedMultiply(4)(5)
// => output: 20
```

## PARTIAL APPLICATION

* The process of producing a function with a smaller amount of parameters => only applying some of its parameters and then using closures to later on apply the rest of the parameters.

```js
// old way
const add = (a, b, c) => a+b+c
add(1, 2, 3) // => output: 6

// currying
const curriedAddition = (a) => (b) => (c) => a+b+c
curriedAddition(1)(2)(3) // => output: 6

// partial application
const partialAddition = add.bind(null, 1)
partialAddition(2, 3) // => output: 6


```

