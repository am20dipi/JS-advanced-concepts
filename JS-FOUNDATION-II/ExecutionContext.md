# EXECUTION CONTEXT

When a function is invoked, the JavaScript Engine creates an execution context for that function. 

Then, the JavaScript Engine adds the execution context onto the Call Stack.

Then, the JavaScript runs the function. 

## The Global Execution Context

Initially, the JavaScript Engine creates the Global Execution Context: 'global()'. (It is the first thing on the call stack.)

When the final line of our code in a JavaScript file is executed and finished running, the global() will be popped off the call stack (First In, Last Out).

The Global Execution Context provides us two (2) things:

* The Global Object ('window' in the browser, 'global' when using Node.js)
* 'this'


### Whenever code is run in JavaScript, it is run inside an Execution Context. True or False?

* TRUE 

### When code is run on the JavaScript Engine, a Global Execution Context is created. True or False?

* TRUE

### When you run a function, a new execution context is created. True or False?

* TRUE

### What is the last thing to be popped off the call stack?

* The Global Execution Context
