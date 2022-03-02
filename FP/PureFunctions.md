# PURE FUNCTIONS

* Pure functions always return the same output given the same input.

* Pure functions cannot modify anything outside of itself => no side effects. 

* Side effects can be destructive.
    * For example: a function that calls pop() on an array. 
    * The array is changed each time we call pop() so it both modifies the array and produces different output given the same input (the array).


* Pure functions minimize bugs, are easy to understand and easy to apply to other things. 

* The ultimate goal of using pure functions is to minimize side effects and bugs. Not everything in your code can be "pure" because we need to see changes in the browser or in the application. 

## SUMMARY OF PURE FUNCTIONS

1. Predictable
2. Composable
3. Immutable state
4. No shared state
5. One task
6. Return statement


## REFERENTIAL TRANSPARENCY

Something that can be replaced with something else and the output remains the same. 

Colloquial Example:

The fair is held in the capital of New York.

 => is the same as: The fair is held in Albany. 


Coding Example:

```js
function a(num1, num2){
    return num1 + num2
}

function b(num){
    return num * 2
}

b(a(3, 4)) // => output: 14
b(7) // => output: 7

```

Either way, if we pass the invocation of a() to b() or just pass in 7 to b(), the same output occurs. 


## IDEMPOTENCE

