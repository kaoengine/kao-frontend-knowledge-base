# What is JavaScript ? Advanced

### JavaScript is a **_HIGH-LEVEL_**, **_PROTOTYPE-BASED OBJECT ORIENTED_** , **_MULTI-PARADIGM_**, **_INTERPRETED_** or **_JUST-IN-TIME COMPILED_**, **_DYNAMIC_**, **_SINGLE-THREADED_**, **_GARBAGE-COLLECTED_** programming language with **FIRST-CLASS FUNCTIONS** and a **NON-BLOCKING EVENT LOOP** concurrency model.

#### It is crazy right ? but if you are going to study this high advanced JavaScript, I am pretty sure this is not hard at all, stay focus.

-----------
> High-level
- Every program that runs on our computers, we needs some hardware resources such as: memory and the CPU to do its work.

![Alt text](/images/highLevelJS/hardware.png)

- Also, there is a low-level language for example C language that you have to manually manage these resources. For example, asking the computer for memory to create a new variable.

- On the other side, we have high-level languages such as: JavaScript, Python, etc... where we _DO NOT_ have to manage resources at all, because these languages have so-called **_ABSTRACTIONS_** that take all of works away from us. This explains these languages are easier to learn and use, but the downside is that programs will never be as fast or as optimized compared to C programs as low-level language.

![Alt text](/images/highLevelJS/low&highLang.png)

> GARBAGE-COLLECTED

It is considered as one of powerful tools to take memory management away from us - developers :), which is basically an algorithm inside the **_JavaScript Engine_**, it removes old, unused objects, unnecessary stuffs automatically from the computer memory. Or you can simply to take note that JavaScript has a cleaning guy to do the job for us.

![Alt text](/images/highLevelJS/garbageCollected.png)

> INTERPRETED or JUST-IN-TIME compiled

Now, it comes to interesting part 😀. Long ago, many people considered and confirmed JavaScript is an interpreted compiled language...However, it is no longer true anymore.

To explain this, firstly, I hope you guys understand what computer's processor is,which means it only understands zeros and ones which is also called **_machine code_**

![Alt text](/images/highLevelJS/machineCode.png)

We simply write human-readable JavaScript code, which is an abstraction over machine code. Well, hard right? or I can explain this way, all the JavaScript codes that we wrote needs to be translated to machine code as an image shown above, and that step can be either compiling or interpreting. This is necessary step in EVERY programming language, because no one writes MACHINE CODE manually, and to be clear, this case of JavaScript, this happens in the JavaScript Engine.

> MULTI-PARADIGM

It is one of things that make JavaScript so popular, yes! JavaScript is a **_multi-paradigm_** language.

> In program, Paradigm is an _approach_ and an overall mindset of structuring our code which ultimately direct the coding style and technique in a project that uses a certain paradigm and this definition sounds kind of abstract. 

There are 3 popular paradigms:

1. Procedural programming
2. Object-oriented Programming (OOP)
3. Functional Programming (FP)

- It sounds fancy right? but I am pretty sure we are using these concepts A LOT

- Many languages are only procedural or only OOP or only functional, but JavaScript does all of it, so it is really flexible and versatile.

> PROTOTYPE-BASED OBJECT-ORIENTED

- First, almost everything in JavaScript is an **_Object_**, excepts for primitive values such as numbers , strings, etc...However, to give you real stand out view , **_Array_** in JavaScript is just an Object.

I used to wonder why I could create an array and then use 'push' method on it, because it is **_prototypal inheritance_**. Basically, we create an array from an array blueprint which is like a template and this is called the prototype. It contains all _array methods_.

The Array that we created in our code and then inherit methods from the blueprint so that we can use them on the arrays like 'push' method.

![Alt text](/images/highLevelJS/arrayBluePrint.png)

[To Know More about ProtoType - Click here](../prototype-chain.md)

> FIRST-CLASS FUNCTIONS

Functions are simply treated as variables. We can pass them into other functions, and return them from functions.

![Alt text](/images/highLevelJS/firstClassVar.png)

To keep it in mind, Not All Languages have first-class functions.

> DYNAMIC

In JavaScript, we don't assign data types to variables and dynamic actually means **_dynamically-typed_** . They will get to be known when JavaScript Engine executes our code. Also, the type of variables can easily be changed as we reassign variables.

On the other hand, for most other programming languages where we have to manually assign types to variables and this usually prevents bugs which is the reason why people say that JavaScript should be a **_strongly-typed_** language as well. Luckily, if you are the person who really likes this kind of strong-typed language, consider __TypeScript__ then.

![Alt text](/images/highLevelJS/dynamic.png)

> SINGLE-THREADED AND NON-BLOCKING EVENT LOOP

Now, it comes to the most complex topic.

- First, what actually is a concurrency model ? It means how the JavaScript Engine handles multiple tasks happening at the same time.
it runs in one single-thread , it can only do one thing at a time. Therefore, we need a way of handling multiple things happening at the same time. Moreover, in _Computing_ , a thread is like a set of instructions that is executed in the computer's CPU. Basically, the thread is where our code is executed in a machine's processor. 

- Second, what if there is a long-running task ? like fetching data from a remote server ? and you think it sounds it would block a single thread where the code is running ? But of course it won't work that way. That is why we have so-called **_Non-blocking behavior_**, but what exactly does it mean or how to use it? By using **_Event Loop_** : Event Loop takes long running tasks and executes them in the _"background"_ , and puts them back in the main thread once they are finished.


![Alt text](/images/highLevelJS/eventLoop.png)

Actually, we will discuss about it in another section, this is just general point of view of the main concepts of JavaScript.

### [To be continued learning JavaScript Engine and RunTime - Click here](./jsEngine&RunTime.md)