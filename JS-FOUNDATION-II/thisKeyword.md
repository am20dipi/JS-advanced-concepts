# THIS

'this' is the object that the function is a property of. 

'this' is the object!

When the Global Execution Context is created, 'this' === the Global Object.

'this' changes based on the context in which it is called. 

'this' keyword is dynamically scoped; it does not matter where the object 'this' refers to is written; it matters where it is called. 

Arrow functions binds 'this' to the object. 


## Call()

Call() => invokes the function
 * .call() === ()

Call() also allows methods to be borrowed  from other objects to use on an object ==> less code; DRY. 

EXAMPLE:
    `obj1.sayHi.call(obj2)`

* Now obj2 has access to function sayHi() even though sayHi() is obj1's function. 

## Apply()

Apply() => invokes the function
 * .call() === .apply() === ()

Apply() does the same thing as call() except it can take an array of parameters. 

EXAMPLE:
    `obj1.sayHi.call(obj2, [50, 30, 20])`

## Bind()

Allows us to store the 'this' keyword or function borrowing for later use --> it returns a function. 

EXAMPLE: 
    `const hi = obj1.sayHi.bind(obj2, 10, 10)`


## Function Currying

Using bind() we can function curry.

Function currying is when you break down a function that takes multiple arguments into a series of functions that each take only one argument.

```
function add(a, b){
    return a+b
}

let addByTwo = add.bind(this, 2)
console.log(addByTwo(4))

// => returns 6
```

