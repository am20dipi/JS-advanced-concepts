# Prototypal Inheritance

Inheritance: is an object receiving access to the properties and methods of the object type it is created/instantiated from. 

Examples:
- An Array[] object receives methods and properties from the Object() object. 

- An instance of an array `const array = [3, 4, 5]` has a prototype of the Array object. Therefore, access to the Array object's properties and methods. 

- A Function() object receives methods and properties from the Object() object.

- An instance of a function `function heyThere(){}` has a prototype of the Function object. Therefore, it has access to the Function object's properties and methods. 

- An instance of an object `const obj = {}` has a prototype of the Object() object. 


In the console:

1. ```array.__proto__``` => Array[] object
2. ```array.__proto__.__proto__``` => Object() object



## Going Up the Prototype Chain

Going up the Prototype Chain, we will eventually reach the Object() object. 

Since instance 'array' inherits from Array[] Object, it has access to Object() object properties and methods as well through the prototype chain. 

Same thing goes for instances of the Function() Object. 

## Create the Prototype Chain

```js
let animal = {
    name: 'Charlie',
    age: 12,
    skillLevel(){
        return 3
    }
}

let dog = {
    name: 'Zo'
}

// This creates the prototype chain. 
// We are saying that the 'dog' object inherits from the 'animal' object; 'dog' now has all the properties and methods that 'animal' has

dog.__proto__ = animal


dog.skillLevel() // => 3
dog.age // => 12
dog.name //=> 'Zo'

```


## .isPrototypeOf() Method

`isPrototypeOf()` asks if the object passed in between parantheses inherits from the object the method is called on. It will either return true or false. 

Example: 

```js
//'dog' inherits from 'animal'

animal.isPrototypeOf(dog) // => true

dog.isPrototypeOf(animal) // => false
```
