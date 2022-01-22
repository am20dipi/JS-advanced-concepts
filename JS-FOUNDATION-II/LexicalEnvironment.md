# LEXICAL ENVIRONMENT

'Lexical'=> related to the words or vocabulary of a language. 

'Lexical Environment' => where you code/write something

A lexical environment is created every time an execution context is created. 

Lexical Analysis => checking to see where the code is written -- its location -- its scope.

### Execution context tells us which lexical enviroment is currently running. True or False?

* TRUE 


In JavaScript, our lexical environment AND lexical scope determines our available variables -- not where the function is called. 

* Function declaration determines scope not when the function is called. 

## HOISTING

The behavior of moving function declarations and variables to the top of their respective environments. 

Hoisting is also JavaScript engine allocating memory to the (some) variables and functions during the creation phase before the execution phase -- because JavaScript runs and reads through the code multiple times. 

* var -- hoisted and assigned undefined
* const -- not hoisted
* let -- not hoisted
* functions -- all hoisted
* function expressions -- not hoisted when invoked; hoisted using variable name


