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
3. As the AST form, it goes through the Interpreter 