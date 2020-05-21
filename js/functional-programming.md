Functional programming
======================

### Imperative programming and declarative programming

Take the case of brewing tea to distinguish between imperative programming and declarative programming

* Imperative programming: 
    1. Boiling water (for the first person) 
    2. Take a tea cup 
    3. Put tea leaves 
    4. Flush water

*Declarative programming 
    1. Give me a cup of tea (for the second person) to 
    give a demo

```js
//imperative programming
const convert = function (arr){
    const result = []
    for(let i=0; i< arr.lenght; i++){
        result[i]=arr[i].toLowerCase()
    }
    return result
}

//declarative programing 
const convert = function(arr){
    return arr.map(r=>r.toLowerCase())
}
```

### What is functional programming
Functional programming is a paradigm of declarative programming.In functional programming, data is transferred in a pipeline composed of pure functions.

Functional programming can use simple 交换律、结合律、分配律mathematical methods to help us simplify the implementation of the code.

It has the following characteristics:

*   Purity: Pure functions do not change values outside the current scope;
```js
    // Negative example
    let  a  =  0
    const  add  =  ( b ) => a = a + b // two add (1) results are inconsistent       
    // Correct example
    const  add  =  ( a , b ) => a + b    
```

*   Data immutability: Immutable

```js
// Negative example
const  arr  =  [ 1 , 2 ] 
const  arrAdd  =  ( value ) => {  
  arr.push ( value )
  return  arr
}
arrAdd ( 3 ) // [1, 2, 3] 
arrAdd ( 3 ) // [1, 2, 3, 3] 
// Positive example
const  arr  =  [ 1 , 2 ] 
const  arrAdd  =  ( value ) => {  
  return  arr.concat ( value )
}
arrAdd ( 3 ) // [1, 2, 3] 
arrAdd ( 3 ) // [1, 2, 3] 
```

> In the postscript 1, sorted out whether the array string method had an effect on the original value

* Function currying: Convert multiple input functions into one input function;
```js
const add = a => b => c => a + b + c
add(1)(2)(3)
```

* Partial function: convert multiple input functions into two parts;
```js
const add = a => (b,c)=> a+ b+ c
add(1)(2,3)
```
* Can be combined: functions can be combined
```js
const add = (x) => x+x
const mult = (x) => x*x
const addAndMult = (x) => add(mult(x))
```

