Asyns
=====



The Async function has reached stage 4 in 2017.
### Points to note when using async / await

* In order to prevent program hang up, pay attention to catch the error 
wording 1: The `try/catch` Capture

```js
async function test1() {
  try {
    await Promise.reject(new Error('boom'))
  } catch(e) {
    console.log(e)
  }
  console.log('go on')
}
test1()
// Error: boom
// go on
```


Writing 2: directly `await` behind the `promise` progressive `catch`
```js
async function test2() {
  await Promise.reject(new Error('boom')).catch(e => console.log(e))
  console.log('go on')
}
test2 ( )
// Error: boom
// go on
```

* Use parallel to increase the speed of the program
```js
// Serial call demonstration
async function block() {
  const result1 = await request(url1)
  const result2 = await request(url2)
}
```


In the above case, `request(url1)` the request is not completed it does not initiate `request(url2)` the request (similar serial call), if you want to make it into a parallel call may be modified as follows:

```js
async function block() {
  const promise1 = request(url1)
  const promise2 = request(url2)
  const result1 = await promise1
  const result2 = await promise2
}
```
Another way:
```js
async function block() {
  const [result1, result2] = await Promise.all([request(url1), request(url2)])
}
```

### Implementation principle of async function
```js
async function fn {}
```

`async` The function is actually converted to `co +` Generator

```js
function  fn  {
  return co(function* () {
  })
}
```

For the short version `co`, you can see the implementation of the asynchronous application of the Generator function

### Asynchronous traverser

> [proposal-async-iteration](https://github.com/tc39/proposal-async-iteration) , the asynchronous traversal has reached stage 4.

#### Asynchronous iterator
The synchronization scenario may be acquired by `value`, `done`:

```js
const {value, done} = syncIterator.next()
```


Asynchronous scenario may be acquired by the following manner `value`, `done`

```js
asyncIterator.next().then({ value, done } => {})
```

#### for await ..of
```js
for await (const line of readLines(filePath)) {
  console.log(line)
}
```