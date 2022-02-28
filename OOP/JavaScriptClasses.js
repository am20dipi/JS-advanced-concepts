// ES6 Class Syntax


// a class is a nice contained object to keep all data, state, and functionality

class Fairy {
    // constructor gets run every time we instantiate
    // a new instance of the object
    constructor(name, power){
        this.name = name
        this.power = power
    }

    attack(){
        return this.name + ' attacks with ' + this.power
    }
}

const sunny = new Fairy('sunny', 'light')


// any changes can be changed within the class and the change will be applied to each instance
// an instance of a class is an object created from a constructor function
// class constructor cannot be invoked without the 'new' keyword 


// a class is syntactic sugar => under the hood we are still using prototypal inheritance


