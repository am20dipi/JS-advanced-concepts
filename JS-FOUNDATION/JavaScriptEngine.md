# The JavaScript Engine

* V8 is the JavaScript Engine
* JavaScript is a single-threaded language
* JavaScript uses a callback queue

The JavaScript Engine (V8) tells the computer how to understand JavaScript and then translates it. 

V8 Engine is written in C++, developed by The Chromium Project for Google Chrome, and released by Google. The first version of V8 was released at the same time as the release of the first version of Chrome. 

ECMAScript Engine is a program that executes source code written in a version of ECMAScript language standard (i.e JavaScript).

## Inside the Engine

JS File -> Parser -> AST -> Interpreter -> Profiler -> Compiler -> Optimized Code

1. JavaScript file is broken down(parsed) into tokens by the Parser. 
2. Tokens are then formed into a tree-like structure called AST (Abstract Syntax Tree).
3. As the AST form, it goes through the Interpreter; the Interpreter reads and translates the files line-by-line. Spits out bytecode (lower-level code; code that is able to be interpreted by JS engine).
4. The Profiler monitors and watches our code as it runs; makes notes on how to optimize code. Passes off code to the JIT Compiler if it can be optimized. 
5. The JIT Compiler takes the code and compiles/modifies it and returns optimized code. 

## Interpreters & Compilers

Interpreter: translate and read the files line-by-line "on the fly"; taking a set of instructions and returning an answer. JavaScript initially was interpreted only. Fast to get up and running but does not provide any optimizations.

Compiler: does not translate on the fly; works ahead of time to create a translation of the code written and turns into a form of code that can be understood by machines (CPU). Compilers return optimized code (faster, more efficient code). Takes longer to get up and running.

Babel is a JavaScript compiler that takes modern JavaScript code and returns browser-compatible JavaScript. 

TypeScript is a superset of JavaScript that compiles down to JavaScript. 

* Both are examples of what compilers do: take one language and convert into a different one. 

Just-In-Time Compiler (JIT Compiler): combines a Interpreter and a Compiler together to provide optimized code at faster speeds. Sends code to the interpreter to produce bytecode and then sends code that can be optimized to the compiler. 

Bytecode is NOT a native machine code; you need software such as a JavaScript engine to execute bytecode. 

## Is JavaScript an Interpreted Language?

Yes - initally when JS first came out. SpiderMonkey (JS Engine) interpreted JavaScript to tell our computers what to do. 

No - because nowadays we use compilers to further translate and optimize our code. 

Depends on implementation of JavaScript -- sometimes the code can only be compiled, only be interpreted or BOTH!


## JavaScript is a SINGLE-THREADED Language

Only one set of instructions are executed at a time!

A language that only has one (1) callstack is a single-threaded language.

Single-threaded === you can only put more food in your mouth when you are done chewing the current food in your mouth. 

JavaScript is SYNCHRONOUS -- one thing happens at a time!

## What Problems Do We See With Synchronous Code?

1. Slow; less efficient runtimes
2. A lot of executions lined up in the stack => more memory being used
3. Cannot do multiple executions at the same time
4. Difficult for long-running tasks


