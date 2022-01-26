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


### Statically Typed v. Dynamically Typed

Static => upon declaration of a variable, statically typed languages also require a claim to what data type the variable's value will be (example: string, integer, boolean); statically typed languages perform type-checking at compile-time. 

Statically typed languages are less efficent; they slow down compile time and slow down the time it takes to write code (production and development). However, statically typed languages produce less bugs. 


Dynamic => upon declaration of a variable or parameters, dynamically typed languages DO NOT require a claim to what data type the variables value will be; they perform type checking at run-time; does not require you to declare the data types of your variables before you use them. 

JavaScript is a dynamically-typed language.

Dynamically typed languages are more efficient regarding compile time and production time. Dynamically typed languages are prone to bugs. 

TypeScript => allows JavaScript to act like a statically typed language!!!!

### Weakly Typed v. Strongly Typed

Weakly typed languages allow the combination of different data types to a value through type coercion.  

Example:

```js
var a = "boo"
a + 17
return a
// => "boo17"
```

Strongly typed languages do NOT allow the combination of different data types to a value through type coercion. 