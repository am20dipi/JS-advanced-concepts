# Hidden Classes

Javascript is a dynamic programming language which means that properties can easily be added or removed from an object after its instantiation.

Most Javascript interpreters use dictionary-like objects (hash function based) to store the location of object property values in memory. This structure makes retrieving the value of a property in Javascript more computationally expensive than it would be in a non-dynamic programming language.

Since the use of dictionaries to find the location of object properties in memory is so inefficient, V8 uses a different method instead: hidden classes.

* Keep in mind that V8 attaches a hidden class to each and every object, and the purpose of the hidden classes is to optimize property access time.

` 
function Animal(x, y){
    this.x = x
    this.y = y
}

const obj1 = new Animal(1, 2)
const obj2 = new Animal(3, 4)

obj1.a = 30
`

Introducing new properties on an instance of an object deoptimizes our code -- instead of declaring properties in the constructor -- because the hidden class is created for that instance and must be changed and refers back to the original class. 