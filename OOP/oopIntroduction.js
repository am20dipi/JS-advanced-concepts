// State is data within the object
// Methods declared within the object can reference and/or modify the state

// Factory functions are functions that act like factories; they create factories for us

function createElf(name, power){
    return {
        name: name,
        power: power,
        attack(){
            return name + ' attacked with ' + power
        }
    }
}

const peter = createElf('Peter', 'invisibility')
peter.attack()
// => 'Peter attacked with invisibility'

// With this function 'createElf()' we can now create as many elves as we want
// we avoid repetitive code

// However, factory functions when they create new instances take up a lot of memory


// So we can use Object.create()

const elfFunctions = {
    attack(){
        return this.name + ' attack with ' + this.power
    }
}

function createElfBetter(name, power){
    newElf = Object.create(elfFunctions)
    newElf.name = name
    newElf.power = power
    return newElf
}
// Object.create() creates a link between the new instance of the object
// and the prototype of the object




// Constructor Functions

function elf(name, power){
    this.name = name
    this.power = power
}
// this function constructs an instance of an elf. 
// in order to use a constructor function, we need to use the 'new' keyword

const adri = new elf('adri', 'fire')
adri.name // => 'adri'
adri.power // => 'fire'

// the new keyword automatically returns the object for us
// and it creates the constructor, giving us access to the properties of the object

// the new keyword changes what 'this' points to; 'this' now points to the instance of the object we just created


// Function Constructor

const elf1 = new Function('name', 'power', 
    `this.name = name; 
    this.power = power;
`)

const sarah = new elf1('Sarah', 'fireworks')
console.log(sarah) // => { name: 'Sarah', power: 'fireworks' }



// Every function in JavaScript gets a prototype property


// Arrow functions are lexically scoped => they declare 'this' based on where the arrow function is DECLARED not invoked.
