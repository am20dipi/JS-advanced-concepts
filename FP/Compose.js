// Compose: the idea that any data transformation should be obvious.

// data gets processed by a function that outputs data that get processed by a function and so on.
// compose takes this assembly line process and optimizes it. 


const compose = (f, g) => (data) => f(g(data))
// function compose() takes in two params: each a function
// function compose() then returns data
// function compose() then passes in the data to function g() and then function f()

const multiplyBy3 = (num) => num * 3
const makePositive = (num) => Math.abs(num)

const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive)

multiplyBy3AndAbsolute(-44)



// Pipe: same thing as compose, except it goes LEFT to RIGHT. 

const pipe = (f, g) = (data) => g(f(data))


// Arity: the fewer parameters, the easier the function is to use / the more accessible it is. 


