JS (Three) comparison operators, logical operators
=================

## Two operators
* Comparison operator
  * “>”、“<”、“==”、“>=”、“<=”、“!=”，“===”
  * The result of the comparison is the boolean value
* Logical Operators
  * “&&”、“||”、“!”
  * The result of the operation is the true value
* Value that is considered false
  * undefined、null、NaN、""、0、false


### Calculation operator

```js
where  a  =  10 ,
    b = 20,
    c;
    c = a < b;      // true
    c = a > b;      // false
    c  =  "a"  >  "b"    // false, ascii code value compared
    c = a == b      // false
    c = a != b      // true
    c  =  NaN  ==  NaN   // false, NaN is not equal to any number;

// === is called congruent (value and type)
var  x  =  5 ;
  x  ===  5 ; // true    
  x === "5";    // false
```

### Logical Operators
```js
/ Logical &&
var  a  =  1  &&  2       // print a-> 2
// logical OR ||
var  a  =  1 || 3 ; // print out a-> 1     
var  a  =  1 || false ; // print a-> 1 
// Logical not! Converted to Boolean value is negated
var  a  =  ! 123 ; // false;   
```

* Logical AND && First look at the result of converting the first expression into a Boolean value. If it is true, then it will look at the result of the second expression converted to a Boolean value, and then if there are only two expressions, just look at the second expression, you can return the value of the expression, a short circuit Statement.
* Logic and || , if an operand or more operands is **to true** , the logic OR operator returns a boolean value **to true** ; all operands are only **to false**, the result is **false**.