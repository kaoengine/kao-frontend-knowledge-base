Spread operator
======================

`...`It is a new symbol from ES6 and is called the spread operator. It has different functions in different situations, and we will sort them out below.

### Expand operator in object


1. `...` When used as an object extension, it can be used to shallowly copy the enumerable properties of the target object's own properties .

> The spread operator in the object is equivalent to Object.assign().

The following examples prove the above conclusion:

- The verification object extension can only copy its own attributes, and the attributes on the prototype chain cannot be copied

```js
class  Demo  {
  constructor ( )  {
    this . name  =  'Lily'
  }

  testFn ( )  { }
}

const  test  =  new  Demo ( )
const  cpObj  =  { ... test }  

cpObj . name  ===  'Lily'  // true
cpObj . testFn ( ) // Uncaught TypeError: cpTest.testFn is not a function       
```

- Verification can only copy enumerable attributes
```js
const  obj  =  Object . defineProperty ( { a : 1 } , 'b' , {     
  enumerable : false , 
  value : 2 
} )

const  cpObj  =  { ... obj }  
obj . a    // 1
obj . b    // 2

cpObj . a  // 1
cpObj . b  // undefined
```

#### [Enumerable Properties in JavaScript]('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties')

>Enumerable properties are properties whose internal enumerable flag set to true. Enumerable simply means "countable", and with JavaScript objects, enumerable properties are those we are typically interested in when iterating over properties. This designation is required because JavaScript objects, as you may know, have many additional properties, like __proto__ and constructor, that we typically want to include when retrieving properties.

```js
var inro , {
name: Shivam gupta
addres: "xyz"
email : "shivamethical@gmail . com"
}
//underined
Object.getOwnPropertyDescriptor(ino, 'name' )
vaLue: "Shivam gupa",
wriabLe: true,
enumerabLe: true, 
conigurabLe: true
value: "Jhivam gupta"
writable: true
_proto: Object
```

>Object.defineProperty method allows us to change the object keys property
```js
Object.defineProperty(objectName, 'key', {
    value: 'Value for that key',
    configurable: true,
    writable: false,
    enumerable: false
});
```

2. Destructuring assignment
```js
const  obj  =  { a : 1 , b : 2 , c : 3 }       
const  { a , ... x } = obj     
const  { a : data } = obj // rename      

a  // 1
x  // {b: 2, c: 3}

data  // 1
```

### Spread operator in array
1. Shallow copy
```js
const arr = [1,2,3]
const cpArray = [...arr]

cpArr // [1, 2, 3]
```

The following writing is also a variant of shallow copy:

```js
const  arr  =  [ 1 , 2 , 3 ]  
const  cpArr  =  [ ]

cpArr . push ( ... arr )
cpArr  // [1, 2, 3]
```

Because of this feature, we can also merge arrays as follows:
```js
const  arr1  =  [ 1 , 2 , 3 ]  
const  arr2  =  [ 4 , 5 , 6 ]  

const  mergeArr  =  [ ... arr1 , ... arr2 ] 

mergeArr  // [1, 2, 3, 4, 5, 6]
```

2. Destructuring assignment
```js
[ a , ... b ] = [ 1 , 2 , 3 ]     

a  // 1
b  // [2, 3]
```
>When the expansion operator is used for destructuring assignment, it can only be placed in the last position


3. Used in passing parameters to turn the passed parameters into an array

```js
function  Demo ( ... args )  {
  console . log ( args )
}

Demo ( 1 , 2 , 3 ) // [1, 2, 3] 
```

### Related Links
