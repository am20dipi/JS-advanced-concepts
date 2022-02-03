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

