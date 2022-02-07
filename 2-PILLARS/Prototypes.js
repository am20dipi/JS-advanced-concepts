// Prototype Exercise

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

