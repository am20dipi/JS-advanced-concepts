// CLOSURES EXAMPLES

// Example 1

// Turn this function into a function 
// that can only be executed ONCE using closures.

let view;
function init(){
    view = 'beach landscape'
    console.log(`view has been set to ${view}`)

}

// currently we could execute this function as much as we want
init()
//console.log(view)

// MY solution

let view;
function initialize(){
    return function displayView(){
        view = 'forest landscape'
        console.log(`view has been set to ${view}`)
    }
}

const myInit = initialize()
myInit()
myInit()

// Correct solution

let view;
function correctSolution(){
    let called = 0;
    return function(){
        if (called > 0){
            return
        } else {
            view = 'desert landscape';
            called++
            console.log(`view has been set to ${view}`)
        }
    }
}

const initOnce = correctSolution()
initOnce()
initOnce()



// Example 2


// Fix this function so the console return:
    // 'I am at index 0'
    // 'I am at index 1'
    // 'I am at index 2'
    // 'I am at index 3'
// It currently returns: 
    // 'I am at index 4'
    // 'I am at index 4'
    // 'I am at index 4'
    // 'I am at index 4'


const array = [1, 2, 3, 4]

for (var i = 0; i < array.length; i++){
    setTimeout(function() {
        console.log(`I am at index ${i}`)
    }, 3000)
}


// MY solution

const array = [1, 2, 3, 4]

// change var => let
for (let i = 0; i < array.length; i++){
    setTimeout(function() {
        console.log(`I am at index ${i}`)
    }, 3000)
}

// By changing 'var' to 'let', because 'let' allows us to BLOCK SCOPE
// The block created by the for loop thus, creates a separate scope for each 'i'
// So, 'i' is scoped to the block. 

// MY solution is correct but there is another correct solution:


// Another solution

const array = [1, 2, 3, 4]
for (var i = 0; i < array.length; i++){
    (function (closureI) {
        setTimeout(function() {
            console.log(`I am at index ${closureI}`)
        }, 3000)
    })(i)
}


// By wrapping setTimeout() in a function wrapper
// 'i' even though it is still declared by var
// 'i' will remain in the local scope when the loop runs after 3 seconds

// Created a function that gave me access to the 'i' variable
// the 'i' is kept in the closure by being passed as a parameter and using it 
// inside the callback function.
