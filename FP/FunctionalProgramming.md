# FUNCTIONAL PROGRAMMING

* Emphasis on simplicity where data and functions are concerned. 

* Functions operate on well-defined data structures rather than class inheritance (objects, data or functions belonging to an object).

## SEPARATION OF CONCERNS

* Separating code into chunks with each chunk has its own responsibilities. 

* Functional Programming separates data from functions. 


## PILLARS OF FUNCTIONAL PROGRAMMING

1. Pure Functions 
   - all functions created in FP are immutable (cannot be changed)
   - not changing the state; no side effects.
   - given the same input, the same output is produced.
2. Immutability
   - Not changing the state; instead making copies of the state and returning the new state every time. 



## IMPERATIVE v. DECLARATIVE

### IMPERATIVE CODE

* Code that tells us HOW to do something.

Colloquial Example:

   * Buy flour, buy sugar, buy eggs...
   * Crack the eggs.
   * Open the bag of flour.
   * Open the bag of sugar.
   * And so on. 

Code Example:

```js
for (let i = 0; i < 10; i++){
   console.log(i)
}

```


### DECLARATIVE CODE

* Code that tells us WHAT to do. 

Colloquial Example:

   * Bake a cake. 

Code Example:

```js

array.forEach(item => console.log(item))

```


## HIGHER ORDER FUNCTIONS (FIRST CLASS Citizens)

* Functions in JavaScript are First-Class Citizens:
   * Functions can be passed as a param to another function. 
   * Functions can be the return value of a function. 
   * Functions can be a property of an object. 


* Higher Order Functions:
   * Takes one or more functions are arguments.
   * Returns a function as a result (aka CALLBACK).



## CLOSURES

* Mechanism for containing state. 

* A closure is created when a function accesses a variable declared outside of the function scope. 

Example:
```js

const closure = function() {
   let count = 0
   return function increment(){
      count++
      return count
   }
}

closure()
// => output: [Function: increment]

closure()()
// => output: 1

const incrementFn = closure()
incrementFn()
// => output: 1
incrementFn()
// => output: 2
```



