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

* The JavaScript Engine keeps all of the variables declared outside of the inner most function in case the inner most function is called. 

* JavaScript is lexically AND statically scoped -- when it looks through our code the first time, it can see what needs to be closured even before we run the code. 

* Lexical Scope => where we write the function matters; not where we call the function. 

Example:

```js
const sayHello = (string) => (name) => (name2) => console.log(`${string} ${name} ${name2}`)

sayHello('hi')('tim')('becca')
```

## Closures + Memory

Closures can be very memory efficient. 

Closures allow for encapsulation. 

