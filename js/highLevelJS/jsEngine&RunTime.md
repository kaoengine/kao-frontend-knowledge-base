## I. What is JavaScript Engine?

It is a program that executes JavaScript code. To note that, every browser has its own JavaScript Engine, the most well-known engine is Google's V-Eight


The V-8 powers Google Chrome but also Node.js which is JavaScript runtime that we can use to build server side applications.

![Alt text](/images/highLevelJS/jsEnginee.png)

Now, Every JavaScript Engine always contains **_Call stack_** and **_a heap_**

![Alt text](/images/highLevelJS/jsEnginee2.png)

- Call Stack is where our code is actually executed which is called **_Execution Context_**

- Heap is an unstructured memory pool which stores all the objects that our application needs.

But, the question is how the code is compiled to machine code ?

> Computer Science sidenote: Compilation vs Interpretation

![Alt text](/images/highLevelJS/compilation.png)

Explanation: 
- First, the machine code is built, and then it is executed in the CPU in the processor. And the execution can happen way after the compilation.

For example: any application that you're using on your computer right now has been compiled before and you're just executing it way after it's compilation (just open any application you are currently having on your laptop or desktop 😄 ).

![Alt text](/images/highLevelJS/interpretation.png)

- On the other hand, Interpretation which runs through the source code and executes it line by line. Therefore, we do not have the second step as Compilation above ,instead the code is read and executed all at the same time.

- To be clear, the source code still needs to be converted into machine code, but it simply happens right before it's executed.

- But the problem with interpreted languages is that they are much, much slower than compiled languages. Especially, with modern JavaScript or fully fledged Web Applications that we built, low performance is no longer acceptable.

For example: - Imaging you are using google maps in your browser and you were dragging the map and each time you dragged it would take one second for it to move. It sounds alright? No! this would be completely unacceptable.

> NOTE: if there is anyone telling you JavaScript is still an interpreted language, you could argue and confirm or even say it loudly. THAT IS NOT REALLY TRUE ANYMORE, because modern JavaScript engine now use a mix between **_Compilation_** and **_Interpretation_** which is called **_Just-In-time compilation_**

![Alt text](/images/highLevelJS/jit.png)

- Just-In-Time basically compiles the entire code into machine code at once and then executes it right away. Having a notice about the difference compared to **_Compilation_** that there is no portable file to execute, and another different approach is that the execution happens immediately after a compilation.

## II. Modern Just-In-Time Compilation of JavaScript Process

![Alt text](/images/highLevelJS/jitProcess.png)

### Explanation: 
#### - A piece of JavaScript code enters the engine, the first step is to parse the code which essentially means to read the code.

#### - During the parsing process, the code is parsed into Data Structure called the **_AST (Abstract Syntax Tree)_**. This works by first splitting up each line of code into pieces that are meaningful to the language such as _const_, _function keywords_ and then saving all these pieces into the tree in a structured way.

#### - This step also checks if there are any syntax errors and later the resulting tree will be used to generate the machine code (0 and 1) codes.

> NOTE: AST has absolutely nothing to do with the DOM, it is just representation of our entire code inside the engine

#### - The next step is Compilation, which takes the generated AST and compiles it into machine code.

#### - Then, this machine code then gets executed right away. Remember, Execution happens in the JavaScript engine **_Call Stack_**.


#### - Furthermore, Modern JavaScript actually has some pretty clever optimization strategies. They create a very _unoptimized version_ of Machine code in the beginning so that it can start executing as fast as possible.

#### - Then in the background, the code is being optimized and recompiled during the already running program execution. And this can be done most of the times, and after each optimization, the _unoptimized code_ is simply swept for the new more _optimized code_ without stopping execution.

#### - In general, this process is what makes modern engines such as V-Eight so fast. And **_Parsing_**, **_Compilation_**, **_Optimization_** happen in special threads that we **_cannot access from code._**

## III. The bigger Picture: JavaScript RunTime

Please look at the images below for more details and easy to understand.

![Alt text](/images/highLevelJS/runtime1.png)
![Alt text](/images/highLevelJS/runtime2.png)

- We can imagine JavaScript Runtime is a big box or a big container which includes all the things that we need to use JavaScript. Importantly, Every JavaScript's heart is always a JavaScript engine.

- Without an engine, there is no runtime and there is no JavaScript at all. However, the engine alone is not enough, we also need access to the Web APIs related to the DOM such as **_Timer_**, or even the **_console.log_** that we use all the time

- Essentially, WEB APIs are functionlities provided to the engine, accessible on **_Window Object_**. It is actually not part of the JavaScript language. JavaScript simply gets access to these APIs through the **_Global window object_**. But it makes common sense that Web APIs are also part of the runtime.

- Next, a typical JavaScript runtime also includes a so-called **_Callback Queue_**. This is the data structure that contains all the callback functions that are ready to be executed.

For example: we attach event handler functions to DOM elements like a button to react to certain events. 

Once Clicking event , the callback function will be called, and after the event was clicked, the first thing that actually happens is that the callback function is put into the **_Callback Queue_** 

And then when the _stack_ is empty, the callback function is passed to the _stack_ so that it can be executed. And this happens by something we called the **_event loop_**

#### - Importantly, JavaScript can exist outside of browsers, for example, in Node.js

Since we do not have the browser, of course we cannot have **_WEB APIs_**. Instead we have multiple **_C++_** bindings and so called **_thread pool_**

![Alt text](/images/highLevelJS/runtimeNode.png)

### [Now , You have observed what is inside of JavaScript Runtime. You have learned Why and What concepts, but exactly HOW can all the codes be executed ? Actually, it comes to deeper logics "The Execution Context and the Call Stack" - Click here](./ExecutionContext&CallStack.md)