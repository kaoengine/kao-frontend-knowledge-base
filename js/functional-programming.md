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

### Curry

The following is an addition function:
```js
var add = (a, b ,c) => a+ b +c
add(1,2,3) //6
```

If there is such a `curry` function, with the packaging `add` after the function returns a new function `curryAdd`, we can parameter `a,b` be passed separately invoked.
```js
var  curryAdd  =  curry ( add )
// The following output results are the same
curryAdd ( 1 , 2 , 3 ) // 6   
curryAdd ( 1 , 2 ) ( 3 ) // 6  
curryAdd ( 1 ) ( 2 ) ( 3 ) // 6 
curryAdd ( 1 ) ( 2 , 3 ) // 6  
```

#### Hands-on implementation of a curry function

The core idea: If the number of parameters passed into it does not reach the curryAddnumber, then the parameters are buffered in the closure variable lists

```js
function curry(fn, ...args) {
  const length = fn.length
  let lists = args || []
  let listLen
  return function (..._args) {
    lists = [...lists, ..._args]
    listLen = lists.length
    if (listLen < length) {
      const that = lists
      lists = []
      return curry(fn, ...that)
    } else if (listLen === length) {
      const that = lists
      lists = []
      return fn.apply(this, that)
    }
  }
}
```

### Code composition (compose)
There are `toUpperCase`, `reverse`, `head` three functions are as follows:

```js
var toUppercase = (str) => str.toUpperCase()
var reverse = (arr) => arr.reverse()
var head = (arr)=> arr[0]
```
Then use them to capitalize the output of the last element of the array, you can do this:

```js
var  reverseHeadUpperCase  =  ( arr ) => toUpperCase ( head ( reverse ( arr ) ) )  
reverseHeadUpperCase ( [ 'apple' , 'banana' , 'peach' ] ) // PEACH   
```

At this point in the construction of reverseHeadUpperCasethe time function, you must manually declare the incoming parameters arr, it can provide a composefunction allowing users to use it more user-friendly form similar to the following?:

```js
var  reverseHeadUpperCase  =  compose ( toUpperCase , head , reverse )  
reverseHeadUpperCase ( [ 'apple' , 'banana' , 'peach' ] ) // PEACH   
```

Moreover `compose` function in line composing, we can use like this:
```js
compose(compose(toUpercase,head), reverse)
ompose ( toUpperCase , compose ( head , reverse ) )
```
Written with two or more `compose(toUppercase, head, reverse)` of exactly the same effect, it is successively from right to left in the reference function execution pass.
In addition `compose` and `map` when used in conjunction with relevent laws have equal effect two wording
```js
compose(map(f),map(g))
map(compose(f,g))
```


### Hands-on implementation of a compose function
The essence of the code is concentrated in one line, which is adopted by many open source libraries (such as Redux).

```js
var compose = (...args) => (initValue) => args.reduceRight((a, c) => c(a), initValue)
```


sssss