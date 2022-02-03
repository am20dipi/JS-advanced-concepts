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


// 
