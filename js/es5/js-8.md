JS (Eight) pre-compilation execution process
=================

## JS running trilogy

* Step 1: Syntax analysis
* Second step : pre-compiled
* The third step : interpreted

### Pre compiled

Grammatical analysis is also called semantic analysis . Syntactic analysis is a process that is executed throughout. For example, I wrote many lines of code. When these codes are executed, he explains one line and one line. Will scan it again to see if there are low-level grammatical errors, such as fewer symbols, with a special character or the like, it will scan through the whole text, but it will not be executed. This process of scanning through the whole text is called grammar analysis After scanning, it will be pre-compiled, and then execute one line in the interpretation line, which is the interpretation execution.

* imply global implies global variables: that is, any variable, if the variable is assigned without declaration, the independent variable is owned by the global object
    * eg : a = 123；
    * eg: var a = b = 123 ；
* Declare all global variables, all `window` of the property
    * eg: var a = 123; ===> window.a = 123;


```js
//example:
    function  test  () {
        console.log("a");
    }
    
    test () ; // successfully print a,
    
    
    
    box () ; // A is successfully printed before the method, why it can be executed is a pre-compiled process
    function box () {
        console.log("a");
    }
      


    var  a  = 123 ;
    console.log ((a) ; // output 123
    
    
    console.log ((a) ; // output undefined, no error;
    var  a  =  123 ;
    
    // But if you print directly, you will get an error;
    console.log ((b) // error
    // Also the effect of pre-compilation
    
    // If you want to be lazy, remember two sentences
    // Overall improvement of function declaration
    // Variable declaration promotion
```

Explain the overall improvement of function declarations: If you write a function declaration, no matter where you write it, the browser will bring this function to the forefront of the logic, so no matter where you call it, it is good to call it from above or below. , In essence, he is called below the function,it will always give you the function declaration to the front of the logic.

Variable declaration promotion such as

```js
var  a  =  123 ;
// Actually he is two steps

var  a ; // The first step is to declare the variable first  
a  =  123 ; // The second step is to assign a value to the variable
```

So the variable promoted by the system instead of the variable is promoted together with the value, so in the example a is printed out undefined;

**Note that these two sentences are not omnipotent**

such as 

```js
function  a (a) {
    var  a  =  123 ;
    var  a  =  function ( ) {
        
    }
    a();
}

var  a  =  123 ;
```

This is not what these two sentences can solve

**Before explaining the above, we must first use what is simply global**
* imply global: implies a global variable: that is, any variable, if the variable is assigned without declaration, the independent variable is in the global object.
• eg : a = 123;
• eg: var a = b = 123;

```js
a = 10;
console . log (a) ; // print 10
// Then there is a in the window property
window.a//10

var  b  =  20 ;
// You declared that window also has b

// window is the global domain
```

### Pre-compiled officially

* Create `Activation object` object
* Get parameter and variable declarations, and the variable name as the parameter AO attribute name, value is undefined
* The parameter argument value and unified
* Find the function declaration in the function body and assign the value to the function body

```js
function fn (a){
    console.log(a);
    
    var  a  =  123 ;
    console.log(a);
    
    function  a  () { } ;
    console.log(a);
    
    var b = function (){
        
    }
    console.log(b);
        
}

fn(1);
```

In this example, the parameters, variables, and function names are all called a. The first thing that can be determined is that there will definitely be an overwrite phenomenon, which is very contradictory. The pre-compilation of the function is said before the execution of the function. It can be said that the pre-compilation reconciles these contradictions.

Pre-compiled


Step 1: Create an AO  object, the full name `Activation object` is the scope, also called the execution context

```js
AO {
    
}
```
Step two: find parameter and variable declarations, variables and parameter names as the AO attribute name, value undefined

```js
AO {
    a : undefined
    b : undefined
}
```

Step 3: Unify the argument values and parameter unified

```js
AO {
    a : 1;
    b :undefined 
}
```

Step 4: Find the function declaration in the function body and assign the value to the function body

```js
AO {
    a : 1,
    b : undefined,
    // b is a function expression, not a function declaration, so it is unchanged
    // Then there is a and b, and then hang the name declared by this function as an AO object
}

// Then the value is assigned to the function body, that is, the attribute values ​​of a and b are turned into the function body
// Overwrite the attribute values ​​of a and b
// It becomes the following
// Because the fourth step has the highest priority
AO {
    a  : function a () {}    
    b :undefined, 
    // b is a function expression, not a function declaration, so it is unchanged
}
```

At this point, the pre-compilation process ends, and the code execution and function execution begin.

**Then we are looking at the above example**

```js
// Pre-compilation results
AO {
    a  : function a ( ) { }    
    b :undefined, 
}
// Start code execution
function fn (a){
    // The first step starts to print a
    // According to the result of pre-compilation above,
    // So the print result is function a () {}
    console.log(a);
    
    // The second step is to execute var a = 123;
    // Because in the second step of pre-compilation, the variable has been improved
    // So the only assignment performed in the second step
    // a = 123; go to the AO object to find a
    // It becomes
    //TO{
        // a: 123 This is the stored value of a
        //b : undefined,
    //}
    var  a  =  123 ;
    // So print out 123
    console.log(a);
    // Because this sentence was read by the system during pre-compilation
    // So I'm not reading this sentence
    function  a  ( ) { } ;
    // So the following console.log (a)
    // Or print 123;
    console.log(a);
    // The same as the following var b has been read during pre-compilation, so it is not read
    //TO{
        //a : 123   
        // So the value of b becomes function () {}
        //b : function(){}
    //}
    var b = function (){
        
    }
    // So print out function () {}
    console.log(b);
        
}

fn(1);
```

**We are looking at an example**

```js
function test(a , b){
    console.log(a);
    c = 0;
    var  c ;
    a = 3;
    b = 2;
    console.log(b);
    function  b  ( )  { }
    console.log(b);
}

test(1,4);
// This time we will quickly get what is printed
//a-->1
//b-->2
//b-->2
```

### Pre-compilation is not only in the function body, but also in the global

The first step in the global is to first generate GO Global Object, the other is the same

GO === window

Then the question is whether GO first or AO first
The answer is to execute GO first
Note : This chapter describes the ES5 pre-compilation process,and the ES6 process will be mentioned at the end of the ES5 at the end of the chapter as a comparison