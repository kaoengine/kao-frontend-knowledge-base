JS (Five) Brief introduction to array or object typeof, type conversion
=================

## Initial reference value

* Array
* Object

## Array

> Array objects are used to store a series of values in separate variable names. The form is a square bracket, which can write a lot of things, separated by a comma in the middle, each comma can be similar to separate two warehouses, each warehouse can put things, such as Number, String, undefined, what type of value can be put .

```js
var arr = [1,2,undefined,"abc",["a",1,5],null]
// Increase of array

document . write ( arr . push ( "Wu Yanzu" ) ) ;
// print arr-> [1,2, undefined, "abc", ["a", 1,5], null, "Wu Yanzu"]

// Deletion of an array (there are multiple methods)
arr.splice(0,1);
// The printout is [2, undefined, "abc", ["a", 1,5], null]


// Modification of the array
arr [ 0 ] ; // Print it as 0       
arr [ 0 ] = 100 ; // It is 100 when printed out;   

// View the array
for(var i = 0;i<arr.length;i++)
console.log(arr[i]);
// print out the corresponding value
```

### Other methods about arrays

* For ... In declaration 
* Use the for ... in declaration to loop through the elements in the array.
* Merging two arrays-concat () 
* How to use concat () method to merge two arrays.
* Using elements of an array to form a string- 
how does join () use the join () method to form all the elements of an array into a string.
* String arrays 
  how sort () uses the sort () method to sort the array literally.
Numeric arrays- 
  how sort () uses the sort () method to sort the array numerically.

## Object

> JavaScript objects are data with properties and methods. Everything in JavaScript is an object: strings, numbers, arrays, dates, etc. In JavaScript, objects are data with properties and methods.

```js
var  obj  =  {
    key : value,
    Key  : value , 
    Attribute : attribute value ;  
}


var  car  =  {
    type:"Fiat", 
    model:500, 
    color:"white",
    money:undefined,
    newCar : false ,
}

// Add object properties
car.width = "1.6m";
// delete object properties
delete car.width;
// Modify object properties
car.width = "1.5m";
```

### typeof

* Six data types
  * Number
  * string
  * boolean
  * undefined
  * object
  * null

```js
// Syntax
typeof ( "put data inside" )

// examples

var num = 123;
var str = "123";
var  a  =  true ;
var  b  =  zero ; 
var c = undefined;
console . log ( typeof ( num ) ) ; // print-> number 
console . log ( typeof ( str ) ) ; // print-> string 
console.log(typeof(a));   //打印-->boolean
console . log ( typeof ( b ) ) ; // print-> object   
console.log(typeof(c));   //打印-->undefined
//The second method
console . log ( typeof  c ) ; // print-> undefined spaces    
```

## Type conversion

### Display type conversion

* Number (mix) is converted to a number
* parseInt (string, radix) converts to integer
* parseFloat (string) converts a number to a floating point number
* toString (radix) is converted to a string
* String (mix) Replace content with string
* Boolean () converts to Boolean


```js
// Number is converted to a number
var  num  =  Number ( "123" ) ; // print 123      
var  num  =  Number ( true ) ; // print 1       
var  num  =  Number ( false ) ; // print 0      
var  num  =  Number ( null ) ; // print 0       
var  num  =  Number ( undefined ) ; // 打印 NaN  
var  num  =  Number ( "a" ) ; // print NaN        
var  num  =  Number ( "123abc" ) ; // print NaN   

// Convert parseInt to integer
// parseInt(String,radix)
// radix is ​​to adjust the hex value range is 2-36
// parseInt uses numbers to truncate from front to back, and truncates to the last character. If there is a non-number, the previous number is returned (as in example 1)

var  num  =  parseInt ( "123.9" ) ; // print 123 instead of rounding    
var  num  =  parseInt ( true ) ; // print NaN       
var  num  =  parseInt ( false ) ; // print NaN      
var  num  =  parseInt ( null ) ; // print NaN       
var  num  =  parseInt ( undefined ) ; // print NaN  
var  num  =  parseInt ( "a" ) ; // print NaN        
var  num  =  parseInt ( "123abc" ) ; // print 123 example 1   
              
// parseFloat converts the number to floating point

var  num  =  parseFloat ( "123.9" ) ; // print 123.9    
var  num  =  parseFloat ( true ) ; // print NaN       
var  num  =  parseFloat ( false ) ; // print NaN      
var  num  =  parseFloat ( null ) ; // print NaN       
var  num  =  parseFloat ( undefined ) ; // print NaN  
var  num  =  parseFloat ( "a" ) ; // print NaN        
var  num  =  parseFloat ( "123.2abc" ) ; // print 123.2 
                
// String replaces the content with a string
var  num  =  String ( 123.9 ) ; // print "123.9"          
var num = String(undefined);      //打印"undefined"

// Convert Boolean to Boolean value
// Except for undefined, null, NaN, "", 0, false, it is false, everything else is true
var  num  =  Boolean ( 123.9 ) ; // print true         
var num = Boolean(undefined);     // 打印false
            
// toString (radix) is converted to a string
// Two can't use one undefined and one null, it will report error undefined and unll have no toString property
// radix is ​​converted to other bases based on base 10
// Usage: the data to be transferred. ToString
var  demo  =  123 ;
var str = demo.toString();
console . log ( str ) // prints out "123"            
```

### Implicit content conversion

* isNaN()
* ++ /-+/- (one dollar plus or minus)
* -，*，/，%
* &&，||，!
* <，>，<=，>=
* == !=


```js
// isNaN () When you put the number in parentheses, he can judge whether it is NaN, and then return it to you

console . log ( isNaN ( NaN ) ) ; // print true      

console . log ( isNaN ( 123 ) ) ; // print false      

console . log ( isNaN ( "123" ) ) ; // print false    

console.log(isNaN("adc"));    // true

console . log ( isNaN ( null ) ; // print false      

console.log(isNaN(undefined); // true

// isNaN executes a Number method internally
// For example isNaN ("abc")
// First execute Number ("abc") to see if it is NaN. If it is, return NaN
// So this Number is not called explicitly, it is called implicitly
```

```js
// ++, call Number first
var  a  =  "123" ;
a ++ ; // print out a-> 124;    

var a = "abc";
a ++ ; // print out a-> NaN;    

// +/- call Number first
var a = + "abc";
console . log ( typeof ( a ) ) // print out Number  


// + implicit type conversion calls string
var  a  =  "1"  +  1 ;
console . log ( typeof ( a ) ) // print out the string 
```

``js
//-, *, /,% implicit type conversion calls Number
```

```js
// <,>, <=,> = call Number if there is a number
var a = "1" < 2;
console . log ( typeof ( a ) ) // prints out boolean 
```

```js
// == 、!=
var  a  =  "1"  ==  1 ;
console . log ( typeof ( a ) ) // prints boolean true
```

```js

//special
undefined  >  0      // Print false
undefined  <  0      // Print false
undefined  ==  0     // Print false
null  >  0           // Print false
null  <  0           // print false
null  ==  0          // print false
undefined  ==  null  // print true
NaN  ==  NaN         // Not equal to anything

```

#### No type conversion occurs

* === vs !== (absolute equal to absolute not equal)

```js
1 !== "1"   // true
1 !== 1     // false
NaN  ===  NaN  // false
```

#### There is also a special

```js
// a without definition
typeof ( a ) ; // Use console.log to print out undefined

// The value types returned by typeof are all string types
typeof ( typeof ( a ) ) // print the string using console.log
```
