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

// Solution

let view;
function initialize(){
    view = 'forest landscape'
    function displayView(){
        console.log(`view has been set to ${view}`)
    }
    return displayView
}

const myInit = initialize()
myInit()

