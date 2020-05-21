Promise 
========

### Promise/A+

Before implementing a promise that conforms to the Promise / A + specification, first understand the core of [Promise / A +]()

* Promise operation will only be in one of three states: pending state(pending), completed state(resolved) and failed state(rejected);

* The state of Promise will only appear from the uncompleted state to the completed state or the failed state;
*  Once the Promise status is changed, it cannot be changed;

### promise api

#### Promise.resolve()

Promise.resolve() There are 4 cases in parentheses

```js 
/ * With Promise object * /
Promise.resolve(Promise.resolve(1))
// Promise {state: "resolved", data: 1, callbackQueue: Array(0)}

/ * Follow thenable objects * /
var thenable = {
    then: function(resolve, reject) {
    resolve(1)
  }
}

Promise.Resolve( thenable )
// Promise {state: "resolved", data: 1, callbackQueue: Array(0)}

/ * Common parameters * /
Promise.Resolve( 1 )
// Promise {state: "resolved", data: 1, callbackQueue: Array(0)}

/ * Does not follow the parameters * /
Promise.Resolve( )
// Promise {state: "resolved", data: undefined, callbackQueue: Array(0)}
```

#### Promise.reject()
Compared to Promise.resolve(), Promise.reject() returns the parameter value intact

#### Promise.all(arr)
For Promise.all(arr), after all elements in the parameter array have become decisive, then return to the new promise
```js
// The following demo, request two urls, when two asynchronous requests return the result, then request the third url
const  p1  =  request( `http: // some.url.1` )
const  p2  =  request( `http: // some.url.2` )

Promise.All( [ p1 , p2 ] ) 
 .then(( datas ) => { // where datas is an array of results after calling p1, p2   
    return  request( `http: //some.url.3? a = $ { datas [ 0 ] } & b = $ { datas [ 1 ] } ` )
  } )
 .then(( data ) => {  
    console.log( msg )
  } )
  ```

  #### Promise.race(arr)
  For Promise.race(arr), as long as one element of the parameter array becomes determinate, a new promise is returned.

  ```js
  // race translated as competition, also request two urls, if and only if one request returns the result, then request the third url
const  p1  =  request( `http: // some.url.1` )
const  p2  =  request( `http: // some.url.2` )

Promise.Race( [ p1 , p2 ] ) 
 .then(( data ) => { // where data fetches the result returned first after calling p1, p2   
    return  request( `http: //some.url.3? value = $ { data } ` )
  } )
 .then(( data ) => {  
    console.log( data )
  } )
  ```


####  Promise.wrap(fn)-callback function to Promise
Through the following case, provide the idea of callback function Promise.
```js
function  foo( a , b , cb ) {   
  ajax(
    `http: //some.url? a = $ { a } & b = $ { b } ` ,
    cb
  )
}

foo( 1 , 2 , function( err , data ) {    
  if ( err )  {
    console.log( err )
  } else {  
    console.log( data )
  }
} )
```

The above is a traditional callback function use case. As long as Promise.wrap() is used to wrap the foo function, the promise is completed, as follows:

```js
const  promiseFoo  =  Promise.wrap( foo )

promiseFoo( 1 , 2 ) 
 .then(( data ) => {  
    console.log( data )
  } )
 .catch(( err ) => {  
    console.log( err )
  } )
```

The implementation logic of Promise.wrap is also listed by the way:

```js
Promise.Wrap  =  function( fn )  {
  return  funtion( )  {
    const  args  =  [ ].slice.call( arguments )
    return  new  Promise(( resolve , reject ) => {   
      fn.apply( null , args.concat(( err , data ) => {    
        if ( err )  {
          reject( err )
        } else {  
          resolve( data )
        }
      } ) )
    } )
  }
}
```

### then / catch / done
These apis are relatively simple and brought together
```js
Promise.Resolve( 1 )
 .then(( data ) => { console.log( data ) } ,( err ) => { console.log( err ) } ) // Chained call, you can pass one parameter(recommended), you can also pass two parameter      
 .catch(( err ) => { console.log( err ) } ) // Catch the error thrown in the chain call || Catch the value that became the failure state   
 .done( ) // can catch the error of the previous chain call(including the catch), you can pass two parameters or not                             
  ```


  ### Hands-on implementation of a Promise
  >Practiced a [repromise](https://github.com/MuYunyun/repromise) that conforms to the Promise / A + specification .
  

  #### Pit 1: Event loop
  >Event loop: After the synchronous queue is executed, the content of the asynchronous queue is executed after the specified time.

  The reason for the single-line event loop, because the execution order of the code is closely related to it, here use setTimeout to simulate the event loop;

  In the following code snippet, the code in setTimeout() will not be executed immediately after the execution of ①, but how many times then are called at this time, it will re-enter ② how many times after the entry, and then enter ③

  ```js
  excuteAsyncCallback( callback , value ) {  
  const  that  =  this
  setTimeout( function( )  {
    const  res  =  callback( value ) // ③ 
    that.excuteCallback('fulfilled', res ) 
  } , 4 ) 
}

then( onResolved , onRejected ) {  
  const  promise  =  new  this.constructor( )
  if ( this.state  ! == 'PENDING')  {
    const  callback  =  this.state  === 'fulfilled' ?  onResolved  : onRejected 
    this.excuteAsyncCallback.call( promise , callback , this.data ) // ①                
  } else {  
    this.callbackArr.push( new  CallbackItem( promise , onResolved , onRejected ) ) // ②   
  }
  return  promise
}
```

#### Pit 2: The problem of this
this in this.callbackArr.push() refers to the'previous'promise, so in class CallbackItem, this.promise stores the'next'promise(then object).

```js
class  Promise  {
  ...
  then( onResolved , onRejected ) {  
    const  promise  =  new  this.constructor( )
    if ( this.state  ! == 'PENDING')  { // Enter the then for the first time, the state is RESOLVED or REJECTED        
      const  callback  =  this.state  === 'fulfilled' ?  onResolved  : onRejected 
      this.excuteAsyncCallback.call( promise , callback , this.data ) // bind this to the promise    
    } else { // After the second start, enter then, the state is PENDING                                 
      this.callbackArr.push( new  CallbackItem( promise , onResolved , onRejected ) ) // here this also refers to the'previous'promise   
    }
    return  promise
  }
  ...
}

class  CallbackItem  {
  constructor( promise , onResolve , onReject ) {   
    this.promise  =  promise  // Correspondingly, the promise stored here is from the next then
    this.onResolve  =  typeof( onResolve ) ==='function'? onResolve :( resolve ) => { }        
    this.onReject  =  typeof( onRejected ) ==='function'? onRejected :( rejected ) => { }        
  }
  ...
}
```


### Expand
```js
setTimeout(( ) => {  
  console.log('A')
} , 0 ) 

Promise.Resolve(
  console.log('B')
).then(( ) => {  
  console.log('C')
} )

console.log('D')
```

Under normal circumstances, this demo should be output B D C A. This involves the knowledge of macro tasks and micro tasks. A macro task can have multiple micro tasks.
  • Macro task(macroTask): setTimeout
  • MicroTask: promise

>Since this project setTimeout promise is implemented, so the demo above, the output is the result of this project B D A C, the solution: may be used setImmediate alternatively setTimeout, can refer [setImmediate.js](https://github.com/YuzuJS/setImmediate).Its essence uses some hacking methods, such as borrowing postMessage to operate the event loop.

#### Thinking: How does promise.all make multiple setTimeout run concurrently?
This is the essence of promise.all (). The browser provides an event loop mechanism to simulate pseudo 'concurrency'

```js
var oldTime = Date.now()
setTimeout(() => {console.log(Date.now() - oldTime)}, 1000) // 1001 ~ 1005(存在 4ms 的波动)
setTimeout(() => {console.log(Date.now() - oldTime)}, 2000) // 2001 ~ 2005
```