# Type Coercion

When the value on the left side of the operator is a different type than the value on the right side of the operator, one of them will be converted by the JavaScript Engine. 

Example:

`1=='1'` => true

Type coercion happens in JavaScript when using the comparison operator (==). 

Example:

```js
if (1){
    console.log('yes')
}
```
In this example, the JavaScript engine coerces the integer '1' to be boolean 'true'. And since true is true, the console logs 'yes'.

Example:

```js
if (0){
    console.log('yes')
}
```
In this example, the JavaScript engine coerces the integer '0' to be boolean 'false'. And since false is NOT true, the console does not log 'yes'. 


## When should we use the comparison operator?

Not really ever -- it can be confusing and unpredictable. Use the strict equality operator (===) instead of the comparison operator. 

## Do all languages have type coercion?

YES - we always need to convert types in programs in order to do things. 


### Some more examples: 

false == ""
    => true
false == []
    => true
false == {}
    => false
"" == 0
    => true
"" == []
    => true
"" == {}
    => false
0 == []
    => true
0 == {}
    => false
0 == null
    => false