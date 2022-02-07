// Prototype Exercise 1

let human = {
    mortal: true
}

// socrates now inherits from 'human'
let socrates = Object.create(human)
console.log(socrates) // => {}
socrates.age = 75
console.log(socrates.age) // => 75
console.log(socrates.mortal) // => true
console.log(human.isPrototypeOf(socrates)) // => true

// Prototype Exercise 2

// Given a Date Object, create a new method .lastYear()
// which shows you the last year in 'YYYY' format

// new Date('1900-10-10').lastYear()
    // => should return '1899'


   // My Solution
const date = new Date('1900-10-10')
function lastYear(date) {
    return (date.getFullYear() - 1)
}


  // Correct Solution
Date.prototype.lastYear = function () {
    return this.getFullYear() - 1
}
new Date('1200-12-12').lastYear()



// Prototype Exercise 3

// Modify .map() to print 'hi' at the end of each item.
// Ex: console.log([1,2,3].map()) => 1hi, 2hi, 3hi

    // My Solution
Array.prototype.map = function() {
    return item + 'hi'
}
[1,2,3].map() // => 1,2,3hi

    // Correct Solution
Array.prototype.map = function() {
    let arr = []
    for (let i = 0; i < this.length; i++){
        arr.push((this[i] + 'hi'))
        
    }
    return arr
}
[1,2,3].map() // => 1,2,3hi

// Prototype Exercise 4

// Create our own .bind() method using either .call() or .apply()

    // bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called

    
    // My Solution

Function.prototype.bind = function() {
    return 
}

