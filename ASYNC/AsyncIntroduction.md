# ASYNCHRONOUS

* basically means we do not have that data YET.
* async functions are functions we execute LATER.

## JAVASCRIPT

* JavaScript is Single Threaded language that can be non-blocking => single threaded means one (1) call stack.

* Running code on a single thread (or single call stack) reduces bugs.


## SYNCHRONOUS

* executing one line of code at a time; a succeeding line cannot run until the preceding line is done executing and is removed from the call stack. 


### What is a Program?

* It has to allocate memory (to variables, data, files...).
* It has to parse and execute scripts => it has to read and run commands. 

### JavaScript Engine V8

* V8 reads and runs the JS code we write and changes it into machine-executable instructions to be used for the browser. 

* V8 is made up of two (2) parts: the Memory Heap and the Call Stack:
    * Memory Heap => allocates memory.
    * Call Stack => where code is read and executed.

* Memory Leak => limited memory space + unused global varibles.

* Call Stack => FILO (first in last out)





