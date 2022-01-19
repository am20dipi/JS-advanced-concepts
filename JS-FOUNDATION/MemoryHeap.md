# Memory Heap

Place to store and write information and data. Place to allocate memory, use memory, and release memory. 

``` const number = 610 // --> please allocate memory for variable 'number' ``` 

* 'number' will be stored in a memory location in the memory heap. 

The Memory Heap provides a free store of memory to keep data in memory.

The Memory Heap allows us to use variables to point to where the data will be stored. 

The V8 Engine stores variables (and its data) in memory locations for us (think cubbies) -- we do not have to do anything.


## Garbage Collection

When JavaScript allocates memory JavaScript automatically cleans up or frees up that memory space when the function (of that allocated memory) is done running. 

Garbage Collection is done automatically and figures out what we need or do not need. However, Garbage Collection does not mean we do not have to pay attention to memory management of the Memory Heap.

How does Garbage Collection work?
    - uses "mark and sweep" 
    - 'marks' what is needed
    - 'sweeps' what is not needed
    - if there is no reference to an object, then it is no longer needed

## Memory Leaks

Memory Leaks are pieces of memory that the application that has used previously and now is no longer needed but ALSO has not been returned to us. 

Three (3) Common Memory Leaks:
1. Global Variables
    * Too many global variables => more memory being used.
2. Event Listeners
    * Never removing event listeners when they are no longer needed. 
3. setInterval()
    * Functions like setInterval() that always run until something stops it -- clearInterval(). 

