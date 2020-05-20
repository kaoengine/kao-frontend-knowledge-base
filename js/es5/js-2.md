JS (Two) introduction, variables, value types, operators
=================

## Start learning JS officially

### What are the major browsers?

| Mainstream browser | Kernel       |
|--------------------|--------------|
| IE                 | trident      |
| Chrome             | webkit/blink |
| firefox            | Gecko        |
| Opera              | presto       |
| Safari             | webkit       |


### JS Where to?

1. Can embed script tags on the page

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
</body>
<script>
    // Related code
</script>
</html>
```

2. Scripts can also be placed in external files

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
</body>
< script  src = "Referenced code path" > < / script>
</html>
```

### basic structure

* In order to comply with the Web standard (one of the w3c standards) structure, style, and behavior are separated, external references are usually used.

| structure | behavior | style |
|-----------|----------|-------|
| html      | js       | css   |

> Separation of phases: Three files are written separately to develop standards.

### JS basic syntax
* Variable
  * Variable declaration
    * Declaration, assignment decomposition
    * Single var
* Naming convention
  * Variable names must start with English letters, _, $
  * Variable names can include letters, _, $, numbers
  * Do not use system keywords and reserved words as variable names

### Declare variables

```js
// Declare a variable
var  a ;
```

```js
// Declare multiple variables
where  a  =  100 ,
    b = 200,
    c = "hello world";
```

### Basic grammar
* Primitive value(stack data): Number, Boolean, String, undefined, null (unchangeable original value).
* Reference value (heap data): array, Object, function ... date, RegExp, etc.

JS numbers (number) are saved in IEEE 754 double precision floating point format. The value range is: 1.7976931348623157E + 308 to -1.7976931348623157E + 308, which is 1.7976931348623157 * 10 to the power of 308 to -1.7976931348623157 * 10 to the power of 308. The number type of JS has a special value called NAN, which is used to indicate that a value is not a number, so NAN! = NAN

>When the computer stores the value, the original value and the reference value are stored in different places. The original value is stored in the stack, and the reference value is roughly stored in the heap.

```js
// The original value stack
where  a  =  10 ,
var  b  =  a ;
 a = 20;
 //console.log prints out b-> 10;
```

```js
// Reference value heap
// Example 1
var  arr  =  [ 1 , 2 ] ;
var  arr1  =  arr ;
arr.push(3);
//console.log prints arr1-> [1,2,3];

// Example 2
var  arr  =  [ 1 , 2 ] ;
var  arr1  =  arr ;
arr = [1,3];
//console.log prints arr1-> [1,2];
```
>[The difference between js stack and heap](https://blog.csdn.net/flyingpig2016/article/details/52895620)

### Basic rules of JS statements

* Use a semicolon at the end of the statement to end " ; ".
* JS syntax errors will cause subsequent code termination, but will not affect other JS code blocks.
* The writing format should be standardized, and there should be spaces on both sides of "=, +,-, /" .

### JS operator

*Operator
  *"+"
    *Math operations, string links
    *Any data type plus string is equal to string
*“-”、“*”、“/”、“=”、“（）”
*“++”、“--”、“+=”、“-=”、“/=”、“*=”、“%=”；
*Priority "," is the weakest, "()" is the highest

> [Operator precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table)

### JS addition, subtraction, multiplication and division

```js
//plus
where  a  =  10 ,
    b = 20,
    c,
    e,
    g,
    h,
    f;
    c  =  a  +  b ; // add 30 to print   
    f  =  1  +  "a" ; // String stitching and printing "1a" 
    e  =  b  -  a ; // minus 10   
    g  =  a  *  b ; // multiply and print 200   
    h  =  b  /  a ; // division print 2   
var  NUM  =  0  /  0   // print NaN stands for Not A Number digital computer knows it is not show a non-call number is NaN represented type Number
```

```js
var  a  =  10 ;
var  b  =  10 ;
a ++ ; // console.log print a-> 11;           
B - ; // print the console.log b -> 9;           
a  + =  10         // equals a = a + 10 console.log print a-> 20
a  + =  10  +  1     // equals a = a + 10 +1 console.log print a-> 21
               // * =, / = Similar will not be introduced
```