// Hoisting Examples


// Example 1

console.log('1---')
console.log(teddy)

var teddy = 'bear'

// variable teddy cannot be invoked before declaration --
// variables declared with the 'var' keyword do NOT hoist



// Example 2

console.log(sing())

function sing() {
    console.log('la la la')
}

// we invoke sing() before its declaration: 
// sing() will be invoked in the console because --
// -- functions are hoisted!