# JavaScript Data Types

Data types are the building blocks of a language.

* Numbers
* Strings
* Booleans
* Undefined
* Null
* Objects
* Symbols

JavaScript has an operator 'typeof' that tells us the type of a piece of data:

   * `typeof 5` =>  number
   * `typeof 'hello'` =>  string
   * `typeof [1, 2, 3]` =>  object
   * `typeof {}` =>  object

Languages can be Statically Typed or Dynamically Typed. 

Symbol value creates something unique; it is useful in individually identifying pieces of data. Usually used for object properties.


## Primitive Types

Primitive: data that represents only a single value.

* Numbers
* Strings
* Booleans
* Undefined
* Null
* Symbols

undefined => absence of variable definition; no 'return' keyword; missing properties of an object

null => absence of value

Primitive data types have Object Wrappers:
 * string => String()
 * boolean => Boolean()

JavaScript secretly (under the hood) wrap objects around primitive data types. 

Primitive types are IMMUTABLE... they cannot really be modified without being removed from memory and reassigned. 


## Non-Primitive Types

Non-Primitive: does not contain the actual value directly. 

* Arrays
* Functions
* Objects

REMEMBER: arrays and functions are OBJECTS.

## JavaScript Built-in Objects

A few examples:
* Math()
* Error()
* Number()
* Date()
* Map()
* Set()
* Array()

## Pass By Value

You are making a copy in memory of the actual value.

Example:

```js 
var a = 1
var b = a
```

When the JavaScript engine sees 'b' it copies the primitive value from variable 'a' and now references it in variable 'b'. But 'b' creates its own location in memory. 

So, both 'a' and 'b' still remain their OWN primitive value types. They are not connected. 


## Pass By Reference 

Example:

```js
let yoshi = {
    name: 'Yoshi',
    age: 12
}

let yoshiBaby = yoshi
yoshiBaby.age = 27
console.log(yoshi)
console.log(yoshiBaby)
```

The console log will show both objects rendering the same name and same age (27), despite only calling on 'yoshiBaby' to change the age property. 

Objects in JavaScript are stored in memory; we do NOT copy the values, we just reference the existing object and its values. There are no copies. 

Pass By Reference saves space in memory since there are not multiple versions or copies. However, it makes modification difficult. 

Pass By Reference also applies to arrays since arrays are objects in JavaScript. 



In order to modify an existing object non-destructively, we can use Object.assign():

```js
let obj = {
    a: 'a',
    b: 'b',
    c: 'c'
}

// first param => target
// second param => where are we taking from
let clonedObj = Object.assign({}, obj)
clonedObj.c = 'cccc'

console.log(clonedObj)
// this should work and only change the value of 'c' in clonedObj

```

We could also use the spread operator: 

```js
let obj2 = {
    a: 'a',
    b: 'b',
    c: 'c'
}

let clonedObj2 = {...obj2}
console.log(clonedObj2)

```
