# IIFE

Immediately Invoked Function Expression

`(function(){

})();`

* Using this above pattern, we can place all library code inside of local scope in order to avoid namespace collisions. 

* Creating an anonymous function expression, in which we invoke immediately after creation. 

## What is the benefit in doing this?

* Since it is a function expression, no global property is being created.

* All variables are scoped inside the function block. 

* Allows us to declare private variables that cannot be accessed within the global scope. 