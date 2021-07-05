# I. The Execution Context

### As we studied previously, how is JIT JavaScript runtime? (after the compilation part as previous lecture, we are going to dive deeper inside the execution part).

<br/>

> ### In my opinions, to Study this lecture , the execution context comes along with CALL STACK to make it more reasonable. All the information step by step, just to let you understand what execution context is. To make it work, we have to apply and understand the CALL STACK as well, this is where we execute all those execution contexts.

<br/>

### Supposing that our code was just finished compiling and the code is now ready to be executed What happens next , is a so-called global execution context is created for the **__top-level code__**.


![Alt text](/images/highLevelJS/globalExecutionContext.png)

### You will be wondering what top-level code is, it is basically that is NOT inside any function, at the beginning, all the code that is outside of functions will be executed.

### For an instance, please look at the image below the real example of top-level code

![Alt text](/images/highLevelJS/topLevelCode.png)

### So, this **__const name__** declaration is clearly a top-level code. Therefore it will be executed in the global execution context.

<br/>

### After that, we have 2 functions **first()** and **second()** as the Functional Declaration will also be declared so that they can be called LATER.

<br/>

> NOTE: the codes inside of function will only be executed when the functions are called.

![Alt text](/images/highLevelJS/declaredFunctions.png)

<br/>

## To answer what is exactly an Execution Context? An Execution Context is an abstract concept. I have 2 small definitions for you to consider.

<br/>


> 1. Environment in which a piece of JavaScript is executed. Stores all the necessary information for some codes to be executed.
>
>2. The execution context is not executing the code. The CPU executes the code that is in the execution context. The execution context is simply an environment for a piece of code to reside in, along with all the necessary information required to execute that code. Our program gets compiled to machine code which is a set of machine-language instructions that the CPU can understand. These instructions are stored in the computer's memory (typically RAM). Each instruction gets a unique memory address. During execution phase, the CPU fetches those instructions from memory using their memory addresses and executes them.


<br/>

-----------------------------------------------------------------------------------------
### Next, In any JavaScript Project, no matter how large it is, there is only EVER **__one global execution context__**. It is always there as the default context, and it is where top-level code will execute. And speaking of execution, now we have an environment where the top-level code can be executed, it finally is executed.

![Alt text](/images/highLevelJS/toplevelExecuted.png)


### Once the top-level code is finished, **Functions** finally start to execute as well.

![Alt text](/images/highLevelJS/functionsExecute.png)

### Here is How it works!

1. For each function call, a new execution context is created containing all the information that is necessary to run exactly THAT function, this similarity goes for methods as well. And ALL these execution contexts together make up the **__CALL STACK.__**

2. When all functions are done executing, the engine will basically keeps waiting for callback functions to arrive so that it can execute these execution contexts.

> Summary: 
Each time the function is invoked, a new execution context is created for that function. Each function will have its own execution context. But only created when the function is invoked or called.
### For an Example:

#### A callback function associated with **__Click__** event, and the **__EVENT LOOP__** provides these new callback functions.


![Alt text](/images/highLevelJS/finalDiagramEC.png)

<br/>

### DISCUSSION:

### Actually there is a question about Functional Declaration that could make you feel confused, so please read the information below:

<br/>
---------------------------------------------------------------------------------------

### Questions about the Declaration Function: 
> Technically when the function is called it starts a new context for that funcion, as the lecture says. BUT I can call a function BEFORE its declared and it still works. So doesn't the global scope run the WHOLE code before going inside each function scope? Confusing!

<br/>

### Explanation:
### 1. First, there are two different phases in JS runtime if we simplify.

- Compile Phase => JS engine will compile(translate) our code, and check there is no error.

- Execution Phase => JS engine will execute the code line by line (Again, it just simplify, not the whole detail).



### 2. Second, in the compile phase, JS engine will:

- Allocate entire memory space for function declaration (statement).

- Assign undefined to the variable which is declared by var keyword.

<br/>

### So that explain why we can invoke the function declaration before it's declaration.

### Because JS engine already allocate the memory space for the function declaration before any execution.

<br/>

```JS
console.log(greet()); // HI
 
function greet() {
  return 'HI';
}

```

-----------------------------------------------------------------------------------------

# II. WHAT'S INSIDE THE EXECUTION CONTEXT? 

1. Variable Environment
- let, const and var declarations
- Functions
- Arguments Objects


2. Scope Chain
3. This keyword

### Now as you already knew, the content of the Execution Context (Variable Environments, Scope Chain and This keyword) is generated in a so-called **__CREATION PHASE__** which happens right before **__EXECUTION.__**

<br/>

> NOTE: TO KEEP IN MIND
> 
>**__ARROW FUNCTION__** do not get their own arguments keyword nor do they get the This keyword.
>
> Instead, they can use arguments object and the This keyword from their closest regular function parent.

<br/>

![Alt text](/images/highLevelJS/EC.png)

-----------------------------------------------------------------------------------------
### Now , it comes to interesting Example, Let's try to simulate the creation phase:

1. CREATION PHASE: 
### Explanation:


![Alt text](/images/highLevelJS/creationPhase.png)
### As the codes shown above, we have 1 Global Execution Context and each Execution Context for each function right?

<br/>

### a) In the global Execution Context: 
- We have the **__name__** variable declaration, and then the **__first__** and **__second__** function declarations, as well as the **__X__** variable declaration.

-  For the functions, the variable environment will literally contain all the code of a particular function.

- However, the value of **__X__** is marked as unknown here, because this value is the result of the **__first__** function that we did not run yet. Technically, none of these values actually become known during the creation phase, but only in execution phase.

<br/>

### b) In the **__first__** function Execution Context:

- We have a variable **__a__** set to 1 and the **__b__** variable which once again requires a function call in order to become known
<br/>

### c) In the **__second__** function Execution Context:
- We have another variable **__c__** set to 2, and since this is a regular declaration function , NOT an arrow function, it also has the arguments object. And this object is an array which contains all the arguments that were passed into the function when it was called.

<br/>

### Ok! that is enough for understanding the **Creation Phase**, but How will the engine keep track of the order in which functions we are called? And another question is How will it know where it currently is in the execution?

<br/>

### Well, this is Where the **__CALL STACK__** finally comes in.

-----------------------------------------------------------------------------------------
2. THE CALL STACK

### Remember the call stack together with the memory heap, makes up the JavaScript engine itself.

<br/>

> ### Call Stack is basically a place where execution contexts get stacked on top of each other in order to keep track of where we are in the programs execution. So the execution context that is on top of the stack, is the one that is currently running. Once it is finished running, it will be removed from the stack, and execution will go back to the previous execution context (LAST IN , FIRST OUT).

<br/>

### To Summary this whole lecture , now we combine both understanding of **__Execution Context__** and **__Call Stack__**

<br/>

### Example:

1. Once the code is compiled, top-level code will start execution. As we learned before, the Global Execution Context will be created for the top-level code, correct ?
- So this is where all the code outside of any function will be executed. 

- To make myself clear, this Global Context contains all variables, functions as I've already showns above the image in CREATION PHASE, and also to be cleaned and cleared, I mentioned all the code outside function will be executed, of course the codes inside of function will only be executed when the functions are called.

![Alt text](/images/highLevelJS/gECCS_1.png)

- Then what happened with this global Execution Context ? the answer is it will be put in the call stack.

![Alt text](/images/highLevelJS/gECCS_2.png)

- And since this context is now at the top of the stack, it is the one where the code is currently being executed.

- Now let's continue with this execution, because Global EC is being executed right?
  - There is a simple variable declaration

![Alt text](/images/highLevelJS/topLevelVar.png)

  - Also, **__first__** function declared.

![Alt text](/images/highLevelJS/firstDeclaration.png)

  - Then, **__second__** function declared.

![Alt text](/images/highLevelJS/seconDeclaration.png)

> ### This is how normal top-level code gets executed.

  - But in the last line, things start to get interesting. Here we declared variable **__X__** with the value that is going to be returned from calling the **__first__** function.

![Alt text](/images/highLevelJS/Xdeclaration.png)

  - So, just keep going then, let's actually call **__first__** function. You wonder what happened immediately when we call the function? Yes, it gets its own execution context. So that, it can run the code inside its body.
 
![Alt text](/images/highLevelJS/firstEC.png)

  - So what happened with this **__first__** execution context ? Well again, it is put in the **__CALL STACK__** and on top of the Global Execution Context. So, it is now the new Execution Context.

![Alt text](/images/highLevelJS/firstECCS.png)

  - Ok! let's continue, so we have another simple variable **__a__** declaration inside the **__first__** function, and this variable will obviously be defined in the **__Variable Environment__** of the current execution context and __NOT__ the global execution context.

  - Now, in the next line, we have another **__second__** function call. 

![Alt text](/images/highLevelJS/secondDEC.png)

  - So, let's call **__second__** function. And yes, another new Execution context is created right away for this **__second__** function.

![Alt text](/images/highLevelJS/secondEC.png)

  - Once more, it is pushed onto the **__CALL STACK__** and becomes the new active context.

![Alt text](/images/highLevelJS/secondECCS.png)

> ### NOTE: important to note that the execution of the **__first__** function has now been paused, so again, we are running the second function now, and in the meantime, no other function is being executed. In order to continue the execution of **__first__** function , the **__second__** function has to return. And this explains why JavaScript has only one thread of execution, it can only do one thing at a time.

<br/>

  - Moving to the next line inside **__second__** function, we have a return statement. it means that the function will finish its execution.

![Alt text](/images/highLevelJS/secondECReturn.png)

  - What does it mean for the **__CALL STACK__** ? it means that the function's execution context (**__second__** EC) will be popped off the stack.

> ### NOTE: The popped off execution context might keep living in memory.

![Alt text](/images/highLevelJS/secondECPopOff.png)

  - What happened next? the previous execution context **__first__** EC will now be back to being active execution context again. And it continues move the next lines inside function **__first__**

![Alt text](/images/highLevelJS/firstECBody.png)
![Alt text](/images/highLevelJS/firstECBody2.png)
![Alt text](/images/highLevelJS/firstECReturn.png)

  - Now, similarity as above, the **__first__** function moves the line return , which means it also finish its execution, and then the **__first__** execution context also popped off the stack

![Alt text](/images/highLevelJS/firstECPopOff.png)

  - Now, it backs to the previous context as Global Execution Context and the line of code where the **__first__** function was first called.

![Alt text](/images/highLevelJS/gECBack.png)
![Alt text](/images/highLevelJS/lastLineCalled.png)

 - Finally, the returned value is finally assigned to variable **__X__** and the Execution is finished.

 - Keep it in mind, the program will actually stay in this state forever until it is eventually really finished. This happens like when we close the browser tab, or the browser window, and then the global execution context is actually popped off the stack.

![Alt text](/images/highLevelJS/gECPopOff.png)

<br/>

> ### NOTE: Now I hope you would understand how it could really keep tracking of the order of the execution. Without Call Stack, how would the engine know which function was being executed before, it would not know where to go back to. And this is the beauty of the Call Stack, it makes this process almost effortless.
>
>### To say in accurately, the codes run inside of execution contexts that are in the stack. But the general point is that code runs in the call stack is also true.


-----------------------------------------------------------------------------------------

## STILL DON'T UNDERSTAND ? 

1. Perhaps, it is the article for our Vietnamese friends to understand basic flow of Execution Context 
[Click here](https://coders-x.com/execution-context-va-execution-stack-trong-javascript/?__cf_chl_jschl_tk__=66f4c8919f5cf031dfdb9edbe41ac152fb19e990-1625226603-0-AZdmjP_Tebl_LMqVbrjre8pqNePpctGfDWEN6RWpKchO-IlTKB6VeBOOld6ro3GJKlypWoXEHBiaQcSG3APKfipBaPDvmcT3z9_UBfG71mFP2RMEKoQARKB0IFvEPPN5lbj916r7B5yopvDyPeLC43KvPe_ue_8NFo_wUz_TuU4CoDd3ShVbdX900vW7GxlNB_RJScFu1ta9R9iKANwxUP-wcXhbsypa27Bi1F0bZATwvCjzO7KEzgH-A08I8B3dH6yld0ts6DtpOR-gvEoetsW_mNy5UReSZdkbBTwPSGpz9IofaqdbCyLU9oIjO7bH6KOY4NdYF60U02VG4EL1GOb5Wl_GbDDoRb4Ts-Zxet_04TePIImZ_rih-w6Ir-gx4hBtmDlxiYFyOZXX7yzLl6k8-8P-SV5Qc8wkyt0o485VZ5Yg-QsGiWLNePq-NBNI35z2vlDSvSXiC-TuI9F8QTtExzY9RsDIaniW666ytJMTibiNqkoK1nqw-csHwwCV46aW6_rrkJH3TrSNdTG7zWo).

2. For more clearer Explanation and deeper in English [click here](https://www.javascripttutorial.net/javascript-execution-context/).

### Move to the next lecture [click here - Scope and Scope chain](./scope.md)