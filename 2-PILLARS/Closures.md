# Closures

The first Pillar of JavaScript: Closures.

Closures allow a function to access variables from an enclosing scope even after it leaves the scope in which it is declared. 

Example:
```js
function a(){
    let cat = 'cat'
    return function b(){
        let dog = 'dog'
        return function c(){
            let wolf = 'wolf'
            return `${cat}  ${dog}  ${wolf}`
        }
    }
}
```

* Invoking a() will return function b()
* Invoking a()() will return function c()
* Invoking b() will return function c()
* Invoking c() will return our string literal

STEPS:
1. Function a() is invoked. 
2. Function a() gets pushed onto the stack and its variable environment is created (its execution context contains 'cat').
3. Function a() gets popped off the stack and its variable environment is removed. 
4. YET, the 'cat' variable is shoved into the closure object and is NOT removed.
5. Function b() is invoked. 
6. Function b() gets pushed onto the stack and its variable environment is created (its execution context contains 'dog').
7. Function b() gets popped off the stack and its variable environment is removed.
8. YET, the 'dog' variable is shoved into the closure box and is NOT removed. 
9. Function c() is invoked. 
10. Function c() gets pushed onto the stack and its variable environment is created (its execution context contains 'wolf').
11. Function c() gets popped off the stack and its variable environment is removed. 
12. Looks into the closure box for the other variables. 



* The variables are shoved into the closure box and not removed because JavaScript sees that the variables are referenced by another function inside of it. 

* Because of closure, the JavaScript Engine makes sure that the function has access to all of the variables outside of the function. 