# SCOPE

What variables we have access to. 

## VARIABLE ENVIRONMENT

A place where variables live in the execution context. 


## SCOPE CHAIN

Each context has a link to its parent's context. 

Each function has access to the global, lexical environment in which it is declared -- it does not matter where the function is invoked. 

Lexical Scope === Static Scope

Lexical Environment === [[scope]]

## Function Scope

Every time we declare a function, we create a new execution context with its own variable environment. 

Whenever you declare a variable in a function, the variable is visible only within the function. You can't access it outside the function. 

'var' is the keyword to define variable for a function-scope accessibility.


## Block Scope

A block scope is the area within 'if', 'switch' conditions or 'for' and 'while' loops. Generally speaking, whenever you see {curly brackets}, it is a block. 

In ES6, 'const' and 'let' keywords allow developers to declare variables in the block scope, which means those variables exist only within the corresponding block.


## CONTEXT VS SCOPE

Scope is a function-based idea; the variable access of the function when it is invoked -- what is in the variable environment. Determined by the visibility and accessibility of variables.

Context is more an object-based idea; what is the value of the 'this' keyword -- the reference to the object that owns the current executing code. Determined by HOW the function is invoked. 