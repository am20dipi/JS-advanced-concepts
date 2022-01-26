# PASS BY VALUE v. PASS BY REFERENCE

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

### Shallow Cloning

When objects are nested within eachother, the deeper object will not abide by cloning and all clones will destructively be affected. 

Example:

```js
let obj2 = {
    a: 'a',
    b: 'b',
    c: {
        d: 'deeper object'
    }
}

let clonedObj2 = {...obj2}

obj2.c.d = 'what will happen?'
console.log(clonedObj2)
console.log(obj2)

// the console will log both clonedObj2 and obj2 with the updated 'd' property. 

```