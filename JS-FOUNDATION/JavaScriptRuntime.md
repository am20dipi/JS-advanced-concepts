# JavaScript Runtime

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

## Web API

The Web API comes with the browser (i.e Chrome, MicroSoft Edge...) and is provided by the JavaScript Runtime. 

A Web API is an application that can do many things:
  * send HTTP requests (fetch())
  * listen to DOM events
  * delay execution (setTimeout(), setInterval())
  * caching
  * database storage

Web APIs are ASYNCHRONOUS -- web APIs can perform execution(s) in the background while our program is running and return the result(data) when the execution is done.


## Event Loop + Callback Queue

1. When something that can only performed by the Web API comes up on the Call Stack => 

2. The Call Stack sends it to the Web API => 

3. The Web API performs the execution and produces the result (data) => 

4. The Web API gives the data to the Callback Queue => 

5. Once the Call Stack is empty, the Event Loop gives the data in the Callback Queue to the Call Stack

## JavaScript Runtime vs. JavasScript Engine

If a JavaScript file is a sheet of music...

The JavaScript Engine is the musician or the composer; able to read and make sense of the sheet of music.

While the JavaScript Runtime is the musician with the instruments; able to read and make sense of the sheet of music AND able to play it. 