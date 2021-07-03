### As we studied previous lecture Execution Context contains 
- Variable Environment
- Scope Chain
- This keyword

#### In this lecture, we are going to understand deeper what scope and scope chain is

![Alt text](/images/highLevelJS/scope.png)

#### I hope you would understand the definition above, but I would like point out the **__lexical Scoping__** by giving you cleaner understanding.
<br/>

#### In JavaScript, we also have a lexical scoping concept, which means a function that is written inside another function has access to the variables of the parent function. It will be confused when we come to the lecture **__closure__** , but we will discuss about it in another section. Just to understand this lexical scoping first.
<br/>

### The 3 Types of Scope:

![Alt text](/images/highLevelJS/3TypesOfScope.png)

1.  ### As image shown above, it is super clear to understand 3 types of codes, but I am going to give you more detailed examples:

![Alt text](/images/highLevelJS/scopeChain.png)

a. To make you easier to understand, considering only variable declaration, because technically, the **__first__** function also counts as global scope.

b. Now, let's dive in, inside the global scope , we have **__myName__** variables and we have a scope (local scope - green color) inside **__first__** function, because each function creates its own scope and it is having the variable **__const age = 30;__** like this example.

c. Next, Inside the **__first__** function scope, we have the **__second__** function which will also create its own scope and containing variable **const job = 'teacher';**

### So We have a nested structure of scopes with one scope inside the others.
### Now, we come to the insteresting part.

* Let's look at the **__second__** function scope, where we need variable **__myName__** and **__age__** which are not declared inside the current scope (**__second__** function -- yellow color). The questions is How do JavaScript Engine know the values of these variables ?

* Well the secret is that Every Scope always has ability to access to all the variables from all its outer scopes or you can say its parent scopes.

* By explaining above, this means **__second__** scope can access the **__age__** variable from the **__first__** scope. And then the **__first__** scope can also access variables **__myName__** that are in the **Global Scope** . As a result, the **__second__** scope will then also be able to access **Global Scope**. By the way to keep it in mind, all this concept also applies to **function arguments**. 

* By this concept, if one scope needs to use certain variables, but it cannot find it in the current scope, it will look up  to outer scope to see if it can find a variable that they need and this action is called **Scope Chain** like image above there is an arrow line.

> ### NOTE: these access variables are NOT copied from one scope to another. Instead, scopes simply look up in the scope chain until they find a variable that they need, or else it will throw error.
>
>### Another important note: This Scope Chain CANNOT and DOES NOT work the other way around. A certain scope will NEVER have an ability to access to the variables of an inner scope. For example as above, **__first__** scope WILL NEVER access the variable **__job__** that is stored in the **__second__** scope.

<br/>

2. ### Now comes to ES6 Block Scope: 

![Alt text](/images/highLevelJS/blockScope.png)

* Whenever there is curly braces *{}* , it is a **__block scope__** including **if block**, **for loop**, **function**, but as I said, it is only can be used in strict mode and with variable types in ES6 **const** and **let** variables.

* Now look at the __purple color__ inside the **__first__** scope, there is a **if block** and only **__const decade = 3;__** can only work in block scope. But **__var millenial = true__** does not work. Therefore, **__var millenial__** is not scoped to **if block**, but it is the part of the function **__first__** scope.

>### NOTE: This is really important, because I have been through many interviews as Fresher interview, Interviewers ASK the differences betwwen let , const and var a lot, and I can tell you this is the one of the parts of the answering the question. Of course, to answer this completely , we have to understand the hoisting part, but we will discuss about it in another section.

* Continue moving on, so as we know, the variable **__var millenial__** belongs to the scope of **__first__** function. Therefore, the **__second__** scope can access to it. Also, the scope chain does apply to **Block Scope** as well. It means that inside purple color block scope, it can access all variables from its outer scopes. Like this example, it can access variables from **__first__** scope and from the **__global scope__**.

* Therefore, we can conclude all variables from **Global Scope** are accessible from everywhere, because they are always at the top of the Scope Chain. And many developers nowadays creating the name for it called as **Global Variables**.

> ### NOTE: **__Block Scope__** cannot access to the scope of **__second__** scope and the same, the **__second__** scope cannot access to the scope of **__block scope__** as well. 
> <br/>

> ### Why is that? To answer this question, Do you remember that I explained to you the **Lexical Scoping** ? 
> <br/>

>### To confirm it to you, the way it can be accessible depending on where the scope is placed, where it is written in the code. In this Example, none of these two scopes is written inside of one another. They're both child scopes of the **__first__** function scope.
> <br/>

>### So by the rules of Lexical Scoping, they cannot access to each other variables.
> <br/>

>### So we can say and add the concept to the Scope Chain that it only works upwards, NOT sideways.
<br/>

3. ### SCOPE CHAIN VS CALL STACK:


![Alt text](/images/highLevelJS/SC_CS_1.png)

### 1. Let's understand the example as image above, this is just what we learnt in the previous Execution Context and Call Stack.

* We have three functions called **__first__** , **__second__** and **__third__** , we start by calling the first function ,which then calls the second function , which in turn calls the third function. And the **Call Stack** will look like as image above.

* Now, all of these has NOTHING to do with **scopes** or the **scope chain** yet. All we are doing here is just creating one execution context for each function call and filling it with the variables of that function.

### 2. Now we have all these variables environments in place, we can actually start building the **Scope Chain.**

* As always, we are going to start with **Global Scope**. And the variables available in the **Global Scope** are the exactly the ones stored in the **Variable Environment** of the **__Global Execution Context__**.

![Alt text](/images/highLevelJS/buildGS.png)

* Now look at the **Global Scope** (image), we also call **__first()__**  in line 2 right? that is the reason why we have execution context for **__first() EC__** in the **Call Stack**, and also this **__first__** function of course, also gets its own scope, which contains all the variables that are declared inside of the function. This is the exactly the same as the **Variable Environment** of the functions execution context **__first() EC.__**

![Alt text](/images/highLevelJS/firstCall.png)

* However, this is not all :), because we have studied the **Scope Chain**, so the **first** scope also gets access to all the variables from its parent scope.

* Reminding you that **Scope Chain** is all about the order in which functions are written in the code (Correct? if you do not remember , looking at those colors as image above that I explained it to you). It is important to note here that **Scope Chain** has NOTHING to do with the order of the execution contexts in the **Call Stack**.

* Another important note is that the **Scope Chain** DOES get the **Variable Environment** from the **Execution Context** as shown by red arrows and that is it. The order of function calls is NOT relevant to the Scope Chain at all.

![Alt text](/images/highLevelJS/first_globalScope.png)

* Now, to make it clearer, let's continue moving on the next function **__second__**, because we also call **__second()__** inside the **__first__** function right?

* Similar to the previous part, its scope is equal to its variable environment, and can access to all its parent scopes as well.

* We can say that the scope chain in a certain scope is equal to adding together all the variable environments of all the parent scopes. So this is the scope and scope chain are built in the JavaScript Engine behind the scenes.

![Alt text](/images/highLevelJS/secondScopes.png)

* Now Comes to the last part ,the **second function** tries to call the **__third__** function. Have you wondered why we can call **third** function ?

* Well, because it is in the **Scope Chain** of the **second** function scope, as we can see it in the diagram. Also, please look at the **Global Scope** the **__third__** function is also in Global Scope, and As I said, a global Scope can be accessible everywhere.

![Alt text](/images/highLevelJS/thirdCall.png)

----------------------------------------------------------------
<br />

* Also this will create a new scope along with scope chain, please look at another image below and pay attention to **third** function only.

![Alt text](/images/highLevelJS/thirdScopeChain.png)

* We try to console.log() with d, c, b and a right? As I said , the **__third__** function is inside of global scope, therefore variable **a** is not a problem, along with the current scope variable **d**.

* But the variable **c** is not in a local scope, JavaScript needs to do a **Variable Lookup** , it looks up in a scope chain and it found variable **c** is defined in the **__second__** function scope, but as I explained the Scope chain has nothing to do with the order of functions were called, even the **__second__** function calls the **__third__** function. Therefore, there is NO way, it can find and access the variable **__c__**.

* So it is even more proofs that The order in which functions are called DOES NOT affect the scope chain at all. As a result we get the ***ReferenceError***. Because the **__third__** function cannot find the variable **c** and **b** in the Scope Chain.


![Alt text](/images/highLevelJS/SummaryScopeChain.png)

#### Diffcult to understand ? Actually I have more examples please [click here](./scopeExample.js)