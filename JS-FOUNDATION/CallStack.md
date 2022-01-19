# Call Stack

Place to keep our code in order to run our code correctly. 

The Call Stack is also a region in memory which operates in FILO (first in, last out) mode. Think: stack of books; the first book is at the bottom; you must remove all the books on top of it to get to the first one. 

** What ever is on the top of the call stack, is where JavaScript is currently running. **

The Call Stacks stores functions and variables as the code executes.

We use the Memory Heap to point to different data, variables, and functions in the Call Stack. 

## Stack Overflow

Stack Overflow happens when we keep calling functions nested inside of eachother over and over again.

Recursion: a function calling itself.

Recursion can be useful, but used wrongly it can cause stack overflow -- it is actually the most common way to do so. 

