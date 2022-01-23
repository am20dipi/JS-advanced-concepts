// Hoisting Examples


// Example 1

console.log('1---')
console.log(teddy)

var teddy = 'bear'

// variable teddy can be invoked before declaration --
// variables declared with the 'var' keyword hoist
// hoisted and assigned 'undefined'



// Example 2

console.log(sing())

function sing() {
    console.log('la la la')
}

// we invoke sing() before its declaration: 
// sing() will be invoked in the console because --
// -- functions are hoisted!



// Example 3

console.log(sayHi())

var sayHi = function(){
    console.log("hi")
}

// since this is a function expression --
// -- it will NOT be hoisted because 
// we are attempting to invoke the function


// Example 4

console.log(sayHi)

var sayHi = function(){
    console.log("hi")
}

// this will be hoisted because we are calling the variable --
// -- NOT invoking the function
// hoisted and assigned 'undefined'


// Example 5

var favoriteFood = "grapes"

var foodThoughts = function() {
    console.log("My favorite food: " + favoriteFood)

    var favoriteFood = "potatoes"

    console.log("My NEW favorite food: " + favoriteFood)
}

foodThoughts()

// since foodThoughts() is a function expression --
// the variable foodThoughts is hoisted and assigned "undefined"

// output => "My favorite food: undefined"
//        => "My NEW favorite food: potatoes"

// hoisting happens on every execution context


