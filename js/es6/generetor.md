Generator
=========

### Generator usage rules
```js
function* gen() {
  const  a  =  yield  1
  console.log(a)
}
```

In order for it to successfully print 1, design the following function:

```js
function step(gen) {
  const  it  =  gen ( )
  let  result
  return function() {
    result = it.next(result).value
  }
}
```

Make the following call:

```js
var  a  =  step ( gene )
a()
a() // 1
```

Summed up the law from this title: 
* `next` The number of calls than the `yield` number of calls of more than 1; 
* The first `next` pass argument is invalid, and the second from `next` participation began to passAs will be valid and `yield` returns the result; 
generator in `yield/next` addition there is a two-way control message notification capability: 
* `yield` values with later can `it.next().value`take the 
* `it.next()` Values in parentheses but as a yieldresult of return
yield pause position

### yield pause position

```js
function* foo(url){
    try{
        const value = yield request(url)
        console.log(value)
    }catch(err){
        ...
    }
}
const it = foo('http://some.url.1')
```

`yield` Followed by re-executing the statement enter the suspend state in the above code, when executed `it.next()`, the following form may be converted to a little:

```js
function* foo(url) {
  try {
    const  promise  =  request ( url ) // When it.next () is executed, this is executed 
    const  value  =  yield  promise  // here is suspended
      console.log(value)
    } catch (err) {
      ...
    }
}
```

### Encounter return / throw

* Encountered return
```js
function* gen(){
    yield 1
    return 2
    console.log('whether to execute')
}

const it = gen()
it.next() //{value: 1, done: false}
it.next() // {value: 2, done: true}
it.next() // {value: undefined, done: true}
```

Summary: encounters `return`, generator function end interrupt, done becomes `true`

* Experience `iterator` of `throw`

```js
function* gen() {
  yield 1
  console.log ( 'Whether to execute' )
}
var  it  =  gen ( )
it.throw(new Error('boom')) // Error: boom
it.next() // {value: undefined, done: true}
```

Summary: experience `iterator` of `throw`, `generator` function outages, doneit becomes true

### Simple implementation of generator

`Generator` Is a function that returns an iterator, the following is its simplified implementation
```js
function foo(url) {
var  state
var  val
function process(v) {
  switch (state) {
    case 1:
      console.log('requesting:', url)
      return request(url)
    case 2:
      val  =  v
      console.log(val)
      return
    case 3:
      var  err  =  val
      console.log('Oops:', err)
      return false
  }
}
return {
  next: function(v) {
    if (!state) {
      state = 1
      return {
        done: false,
        value: process()
      }
    } else if (state === 1) {
      state = 2
      return {
        done: true,
        value: process(v)
      }
    } else {
      return {
        done:true, 
        value: undefined
      }
    }
  },
  throw: function() {
    if (state === 1) {
      state = 3
      return {
        done:true, 
        value: process(e)
      }
    }else{  
      throw e
    }
  }
}}
var it = foo('http://some.url.1')
```

### Asynchronous application of generator function
`co` is the library, now it has unified `Generator + Promise` call mode, a simple simulation of the following
```js
co(function* (){
    const result = yield Promise.resolve(true)
    console.log(result) // true
})

//short version promise 
function co(gen){
    const it = gen()
    const step = function(data){
        const result = it.next(data)
        if(result.done){
            return result.value
        }

        result.value.then(data=>{
            step(data)
        })
    }
    step()
}
```

Observation `co` library found, `co` the function returns `promise`, the following:

```js
function co(gen) {
  return new Promise((resolve, reject) => {
    const  it  =  gen ( )
    let  result
    const step = function(fn) {
      try {
        result = fn()
      } catch(e) {
        return reject(e)
      }
      if (result.done) { return resolve(result.value) }
      result.value.then((data) => {
        step(() => it.next(data))
      }, (err) => {
        step ( ( ) => it . throw ( err ) ) // Here in order to let the throwing error be directly digested in the generator, so the function is changed in step   
      })
    }
    step(() => it.next())
  })
}
```