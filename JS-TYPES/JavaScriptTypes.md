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


