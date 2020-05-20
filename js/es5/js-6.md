JS (Six) function, initial scope
=================
## function

- definition
  - Function declaration
  - Function expression
- formation
  - Function name
  - parameter
    - Formal parameter
    - Arguments
- return value

## Function declaration

```js
// The first way
function box(parameter) {
  // content
}

// The second kind is called named function expression
var box = function test(parameter) {
  // content
};
// Output box.name-> test on browser console

// The second writing method becomes an expression after the function, it doesn't matter if the name is there, so the third writing method is extended

// The third kind is called anonymous function expression-> function expression
var box = function (parameter) {
  //content
};
// Output box.name-> box on browser console

// function execution
box();
```

## parameter

- A parameter is also called a parameter variable. It is a variable and is a very important part of a function.

### Formal and actual parameters

```js
// formal parameters-> formal parameters
function test1(a, b) {
  var c = a + b;
  console.log(c);
}
// actual parameter-> actual parameter
test1(1, 2); // output 3 // (1,2) is passed in as a parameter
```

### Indefinite parameters

* We usually use the API functions to construct a variable parameter, the variable parameter function can accept any number of parameters, we generally use the said arguments is a reference variable or variable parameter

```js
// Indefinite parameter example 1
function test2(a){
    // a is equal to 1
    // 2, 3 don't care
    // The implicit method arguments [1,2,3] argument list
    // find redundant actual parameters
}
test2 ( 1 , 2 , 3 ) ; // After executing test2 (1,2,3) as parameters 

// Indefinite parameter example 2
function test3(a,b,c,d){
    // a is equal to 1
    // b equals 2
    // c is equal to 3
    // d is equal to undefined
    // Found length parameter SUM . Length
}

test3 ( 1 , 2 , 3 ) ; // After executing test3 (1,2,3) as parameters
```

The benefits of uncertain parameters are as follows:

```js
var  result  =  0 ;
function  sum ( ) {
    for(var i = 0; i<arguments.length;){
        result += arguments[i];
        i++;
    }
    
    console.log(result);
    
}
sum(1,2,3,4,5,6,7,8,9);
```

### JS mapping rules 

```js
function sum(a,b){
    a = 2;
    console . log ( arguments [ 0 ] ) ; // prints out 2, parameter a changed    
}
sum(1,2);

function sum(a,b){
    a = 2;
    arguments[0] = 3
    console . log ( arguments [ 0 ] ) ; // prints out 3, the parameter a has changed and can change each other    
}
sum(1,2);
```

```js
function sum(a,b){
  // arguments [1] is worthless
    b = 2;
    console.log(arguments[1]);
}
sum(1);
```

> * Print out undefined
> * When the argument list was passed in, he had a few. Even if I let b equal to 2, it would not be added to the arguments.
> * There is no function at all, at this time b is used as a variable.
> * b The actual parameter is not mapped, because the formal parameter has one more b than the actual parameter. Only when they are equal they will have the mapping rule. Not mapped.

### End condition plus return value return

* End function, if not written, the system defaults to return
* Return the value outside the function

```js
function  sum ( ) {
    return 123
}

var  box  =  sum ( ) ; - > returns 123
```

## A Preliminary Study of Scope

• Scope definition: The area where variables (variable scope is also called context) and functions take effect (can be accessed).
• Global and local variables.
• Scope access order.

> Inside the function, you can access things outside the function. The variables defined on the script tag are called global variables, and the variables defined inside the function are called local variables.

```js
// a is a global variable

var  a  =  123 ;
function  test ( ) {
    console . log ( a ) ; // printed out is 123     
    // b is a local variable
    var  b  =  123 ;
    function  demo ( ) {
        var  c  =  234 ;
        console.log(a);
        console.log(b);
    }
    console.log(c);     //c is not defined;
};
test();
console.log(b);         //b is not defined
```

```js
function  test ( ) {
    var  a  =  123 ;
}

function  demo ( ) {
    var  b  =  12 ;
}
// test and demo cannot access each other
```