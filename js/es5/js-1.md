JS (One) Understanding JavaScript
=================

### Foreword

JavaScript (referred to as "JS" for short) is a lightweight , interpreted or just-in-time programming language with function first . Although it is famous as a scripting language for developing Web pages , it is also used in many non-browser environments. JavaScript is based on prototype programming , a multi-paradigm dynamic scripting language, and supports object-oriented , imperative, and declarative ( Such as functional programming ) style.
  

### Features of JS language

1. Interpreted languages (no need to compile to files) cross-platform.
2. Single thread.
3. ECMA Standard-In order to gain technical advantage, Microsoft introduced JScript, CEnvi launched ScriptEase, which can run on the same browser as JavaScript. In order to unify the specification, JavaScript is compatible with the ECMA standard, so it is also called ECMAScript.

**(1) The difference between interpreted language and compiled language**
  
* Compiled language: Before the program is executed, a special compilation process is needed to compile the program into a machine language file. It does not need to be re-translated at runtime, and the result of the compilation can be used directly. The program execution efficiency is high, dependent on the compiler, and cross-platformity is poor. Such as C, C ++, etc.

* script language: programs in interpreted languages do not need to be compiled before running , and are translated only when the program is run again . A special interpreter is responsible for interpreting the program code when each statement is executed. In this way, the interpreted language must be translated every time it is executed, which is relatively inefficient. Such as JavaScript php python etc.

  
**(2) Single thread**

* When the single-threaded program is executed again, the program paths taken are arranged in a sequential order. The first must be processed before the next.

* Then the next figure we see the animation re-synchronization, but we say it `JavaScript` is characterized by single-threaded, then why he can perform synchronized animated it? This is not to say that js is time for two setInterval
  
![single thread](https://cdn.nlark.com/yuque/0/2019/gif/288385/1553156963164-b808e5a6-ec97-4ad8-98ff-0f9da6bbf9bc.gif)

### When two or more setIntervals are executed simultaneously
* Will run in a round-robin time slice
    **(1) Rotating time slice**

Round-robin time slice: Time-slice round-robin scheduling is one of the oldest, simplest, fairest and most widely used algorithms, also known as RR scheduling. Each process is assigned a time period, called its time slice, which is the time allowed for the process to run.
Suppose you want to perform two tasks
1. Task A and Task B.
2. The js engine will cut task A and task B into fragments in milliseconds or microseconds.
3. Arrange these fragments in a random way (this is also called a time slot).
4. Then send these arranged fragments one by one to the JS engine.
5. Then the JS engine executes this segment on a segment by segment basis, and executes task A and task B according to the segment.


### JavaScript operating mechanism

The single-threaded operation method was introduced above , but this operation method will cause a lot of waste, especially when the calculator processor speed is getting faster and faster. Then, when the input and output operations (ajax operations) are performed, this time, you have to wait for the processing results to come out and then execute them.

At this time, the main thread can completely ignore the input and output devices, and can temporarily suspend the program, perform other tasks, wait for the results, and then execute the suspended tasks.

Therefore, tasks can be divided into two types, one is `Synchronous task` and one is `Asynchronous task`.
The synchronization task is the single thread introduced earlier and is executed according to the main thread.
The asynchronous task is introduced earlier. According to the task queue, when it encounters a task similar to input and output, it is suspended and waits for the main thread to be notified before the task continues to execute
  
The synchronization task is the single thread introduced earlier and is executed according to the main thread.
The asynchronous task is introduced earlier. According to the task queue, when it encounters a task similar to input and output, it is suspended and waits for the main thread to be notified before the task continues to execute.
![sync-async](https://cdn.nlark.com/yuque/0/2019/png/288385/1560790036186-a2cdcfb0-d178-4e28-9af1-01bb0d9117ba.png?x-oss-process=image%2Fresize%2Cw_746)