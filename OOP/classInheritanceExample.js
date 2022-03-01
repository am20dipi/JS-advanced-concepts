class Character {
    constructor(name, power){
        this.name = name
        this.power = power
    }

    attack(){
        return this.name + ' attacks with ' + this.power
    }
}

// class Fairy inherits properties and methods from the class it extends from


class Fairy extends Character {

     constructor(name, power, type){
         super(name, power)
         this.type = type
     }
}

// Instances of class Fairy can have independent properties or methods separate from the class it extends from
// BUT, we must call super() to call the constructor of the upper class
// BECAUSE we need to define 'this' to point to the upper class
// In short, to use 'this' in a sub class constructor we need to call super()


const fiona = new Fairy('Fiona', 'water', 'good fairy')
fiona // => Fairy { name: 'Fiona', power: 'water', type: 'good fairy' }
fiona.attack() // => "Fiona attacks with water"