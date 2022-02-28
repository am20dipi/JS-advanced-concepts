// Different ways of using 'this'

// (1) 'new' keyword binds 'this' to the instance we instantiated
function Person(name, age){
    this.name = name
    this.age = age
}

const person1 = new Person('Xavier', 55)



// (2) implicit binding
// when 'this' is called inside an object

const person = {
    name: 'Adri',
    age: 24,
    hi(){
        console.log('hi' + this.name)
    }
}


// (3) explicit binding
// using .bind(), .call() or .apply()

const heyPerson = {
    name: 'Adri',
    age: 24,
    hi: function(){
        console.log('hi' + this.setTimeout)
    }.bind(window)
}

person3.hi()
// => 'this' is binded to the window object; not the heyPerson object.


// (4) arrow function
// lexically scoped; 'this' binds to where the arrow function is written (NOT INVOKED)

const person4 = {
    name: 'Adri',
    age: 24,
    hi: function() {
        var innerScope = () => {
            console.log('hi' + this.name)
        }
        return innerScope
    }
    
}


