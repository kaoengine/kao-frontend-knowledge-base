# JS (One) Understanding JavaScript

Event Loop also called "event loop", it is actually related to the operation mechanism of JS, foggy at first glance, there's no need to worry. After reading this article you will know what it means, that all start with the initial design of JS.

## Single thread

Process and thread are concepts in the operating system.
For example, if you open a browser on your computer to watch a video, you open a browser process At this time, you want to record important information in the video, so you open the memo, which is a memo process, the system will allocate the address space, data, code and other system resources it needs for each process.

If a process is regarded as a small workshop, there are many workers in the workshop, some are responsible for operating the machine, and some are responsible for handling materials. Each worker can be regarded as a thread, and the thread can share the resources of the process. It can be said that a thread is the smallest unit of a process, and a process can contain multiple threads.

JavaScript was single-threaded at the beginning of the design. When the program is running, only one thread exists, and only certain code can be executed at certain times. This is related to the use of JavaScript. It is a browser scripting language, which is usually used to manipulate the DOM. If it is multi-threaded, one thread deletes the DOM and the other adds DOM. What should I do at this time? So JavaScript was single-threaded at the beginning of the design.

Although HTML5 adds Web Work to open another thread, the thread is still controlled by the main thread, so the essence of JavaScript is still single-threaded.

## Execution stack and task queue

Single-threaded JavaScript is executed section by section, the previous execution is finished, and then the latter is executed. Imagine one. If the previous task needs to be executed for a long time, such as interface requests and I / O operations, then the following tasks can only wait dryly? Not only does it waste resources, but also the level of interaction on the page is poor. JavaScript is aware of this problem, they divide the tasks into synchronous tasks and asynchronous tasks, and have different treatments for the two.

JavaScript will store variables in the heap and stack at runtime. Some objects are usually stored in the heap, and variables and pointers to objects are stored on the stack. When JavaScript is executed, the synchronization tasks will be queued up and executed in order on the main thread. After the previous execution is completed, the execution is followed by the latter. The queued place is called the execution context stack . JavaScript will not stop and wait for the asynchronous task, but suspend it and continue to execute the synchronous task in the execution stack. When the asynchronous task returns a result, the asynchronous task will join the queue that is different from the execution stack, that is, the task queue (task queue), so what is stored in the task queue is the result of the asynchronous task execution, which is usually a callback function.

When the synchronization task of the `execution stack` has been executed, and the main thread is idle at this time, it will check whether there is a task in the task queue. If so, the main thread will add the task that first entered the task queue to the execution stack for execution. After the tasks in the stack have been executed, the main thread goes to the task queue again to see if any tasks are executable. The main thread goes to the task queue to read the task to the execution stack to execute. This process is cyclical. This is the Event Loop , the event loop.

example:

When we invoke a function, it gets added to `execution stack` which is part of the JS engine, this isn’t browser specific. It’s a stack, meaning that it’s first in, last out (think of a pile of pancakes). When a function returns a value, it gets popped off the stack.

![call stack](https://res.cloudinary.com/practicaldev/image/fetch/s--44yasyNX--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gid1.6.gif)

The `respond` function returns a `setTimeout` function. The `setTimeout` is provided to us by the Web API: it lets us delay tasks without blocking the main thread. The callback function that we passed to the `setTimeout` function, the arrow function () => { return 'Hey' } gets added to the Web API. In the meantime, the `setTimeout` function and the respond function get popped off the stack, they both returned their values!

![setTimeout](https://res.cloudinary.com/practicaldev/image/fetch/s--d_n4m4HH--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gif2.1.gif)

In the Web API, a timer runs for as long as the second argument we passed to it, 1000ms. The callback doesn’t immediately get added to the `execution stack`, instead it’s passed to `task queue`.

![task queue](https://res.cloudinary.com/practicaldev/image/fetch/s--MewGMdte--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gif3.1.gif])
This can be a confusing part: it doesn't mean that the callback function gets added to the execution stack (thus returns a value) after 1000ms! It simply gets added to the `task queue` after 1000ms. But it’s a queue, the function has got to wait for its turn!

Now this is the part we’ve all been waiting for… Time for the event loop to do its only task: connecting the queue with the call stack! If the call stack is empty, so if all previously invoked functions have returned their values and have been popped off the stack, the first item in the queue gets added to the call stack. In this case, no other functions were invoked, meaning that the call stack was empty by the time the callback function was the first item in the queue.

![event loop](https://res.cloudinary.com/practicaldev/image/fetch/s--b2BtLfdz--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gif4.gif)

The callback is added to the call stack, gets invoked, and returns a value, and gets popped off the `execution stack`.

![popped of](https://res.cloudinary.com/practicaldev/image/fetch/s--NYOknEYi--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gif5.gif)

```js
const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"), 500);
const baz = () => console.log("Third");

bar();
foo();
baz();
```

![demo](https://res.cloudinary.com/practicaldev/image/fetch/s--BLtCLQcd--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gif14.1.gif)

1. We invoke `bar`. `bar` returns a setTimeout function.
2. The callback we passed to setTimeout gets added to the Web API, the setTimeout function and `bar` get popped off the `execution stack`.
3. The timer runs, in the meantime `foo` gets invoked and logs First. `foo` returns (undefined),baz gets invoked, and the callback gets added to the queue.
4. baz logs Third. The event loop sees the `execution stack` is empty after baz returned, after which the callback gets added to the call stack.
5. The callback logs Second.

## Macro tasks and micro tasks

Asynchronous tasks have a deeper division. They are macro tasks and micro tasks , and the execution order of the two is also different. As we mentioned above, the results of asynchronous tasks will enter the task queue. For different event types, macro tasks will be added to the macro task queue, and micro tasks will be added to the micro task queue.

| Macro task    | setTimeout , setInterval , setImmediate                |
|---------------|--------------------------------------------------------|
| Micro task    | process.nextTick , Promise callback , queue micro task |

When a Promise resolves and calls its then(), catch() or finally(), method, the callback within the method gets added to the micro task queue! This means that the callback within the then(), catch() or finally() method isn't executed immediately, essentially adding some async behavior to our JavaScript code!

So when is a then(), catch() or finally() callback executed? The event loop gives a different priority to the tasks:

1. All functions in that are currently in the call stack get executed. When they returned a value, they get popped off the stack.
2. When the call stack is empty, all queued up microtasks are popped onto the callstack one by one, and get executed! (Microtasks themselves can also return new microtasks, effectively creating an infinite microtask loop 😬)

3. If both the call stack and microtask queue are empty, the event loop checks if there are tasks left on the (macro)task queue. The tasks get popped onto the callstack, executed, and popped off!


**example**
Task1: a function that's added to the call stack immediately, for example by invoking it instantly in our code.
Task2, Task3, Task4: microtasks, for example a promise then callback, or a task added with queueMicrotask.
Task5, Task6: a (macro)task, for example a setTimeout or setImmediate callback

![gif example](https://res.cloudinary.com/practicaldev/image/fetch/s--05Fi8vBq--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/42eatw03fcha0e1qcrf0.gif)

First, Task1 returned a value and got popped off the call stack. Then, the engine checked for tasks queued in the microtask queue. Once all the tasks were put on the call stack and eventually popped off, the engine checked for tasks on the (macro)task queue, which got popped onto the call stack, and popped off when they returned a value.

Okay okay enough pink boxes. Let's use it with some real code!


```js
console.log('Start!');

setTimeout(() => console.log('time out'), 0)

Promise.resolve('Promise')
       .then(res => console.log(res))
console.log('End')
```

In this code, we have the macro task setTimeout, and the microtask promise then() callback. Once the engine reaches the line of the setTimeout function. Let's run this code step-by-step, and see what gets logged!


On the first line, the engine encounters the console.log() method. It gets added to the call stack, after which it logs the value Start! to the console. The method gets popped off the call stack, and the engine continues.

![start](https://res.cloudinary.com/practicaldev/image/fetch/s---Bt6DKsn--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/6cbjuexvy6z9ltk0bi18.gif)

The engine encounters the setTimeout method, which gets popped on to the call stack. The setTimeout method is native to the browser: its callback function (() => console.log('In timeout')) will get added to the Web API, until the timer is done. Although we provided the value 0 for the timer, the call back still gets pushed to the Web API first, after which it gets added to the (macro)task queue: setTimeout is a macro task!

![setTimeout](https://res.cloudinary.com/practicaldev/image/fetch/s--6NSYq-nO--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/yqoemb6f32lvovge8yrp.gif)

The engine encounters the Promise.resolve() method. The Promise.resolve() method gets added to the call stack, after which is resolves with the value Promise!. Its then callback function gets added to the microtask queue.

![promise](https://res.cloudinary.com/practicaldev/image/fetch/s--us8FF30N--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/6wxjxduh62fqt531e2rc.gif)

The engine encounters the console.log() method. It gets added to the call stack immediately, after which it logs the value End! to the console, gets popped off the call stack, and the engine continues.

![end](https://res.cloudinary.com/practicaldev/image/fetch/s--oOS_-CiG--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/a6jk0exl137yka3oq9k4.gif)

The engine sees the `execution stack` is empty now. Since the call execution stack empty, it's going to check whether there are queued tasks in the microtask queue! And yes there are, the promise then callback is waiting for its turn! It gets popped onto the call stack, after which it logs the resolved value of the promise: the string Promise!in this case.

![micro queue](https://res.cloudinary.com/practicaldev/image/fetch/s--5iH5BNWm--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/lczn4fca41is4vpicr6w.gif)

The engine sees the `execution stack` is empty, so it's going to check the microtask queue once again to see if tasks are queued. Nope, the microtask queue is all empty.

It's time to check the (macro)task queue: the setTimeout callback is still waiting there! The setTimeout callback gets popped on to the `execution stack`. The callback function returns the console.log method, which logs the string "In timeout!". The setTimeout callback get popped off the `execution stack`.


## Promise

When writing JavaScript, we often have to deal with tasks that rely on other tasks! Let's say that we want to get an image, compress it, apply a filter, and save it

The very first thing we need to do, is get the image that we want to edit. A getImage function can take care of this! Only once that image has been loaded successfully, we can pass that value to a resizeImage function. When the image has been resized successfully, we want to apply a filter to the image in the applyFilter function. After the image has been compressed and we've added a filter, we want to save the image and let the user know that everything worked correctly!


```js
getImage('link' => (image, err) => {
  if (err) throw new Error(err);
  compressIMG(image, (compressedIMG, err)) => {
    if (err) throw new Error(err);
    applyFilter(compressedIMG, (filteredIMG, err)) => {
      if (err) throw new Error(err);
      saveIMG(filteredIMG) => {
         if (err) throw new Error(err);
         console.log('success fully saved image!');
      }
    }
  };
});
```

 This is often referred to as a callback hell, as we end up with tons of nested callback functions that make the code quite difficult to read!

Luckily, we now got something called promises to help us out! Let's take a look at what promises are, and how they can help us in situations like these!

## Promise Syntax
ES6 introduced `Promises`. In many tutorials, you'll read something like:

>"A promise is a placeholder for a value that can either resolve or reject at some time in the future"

![new promise](https://res.cloudinary.com/practicaldev/image/fetch/s--phTVdCKA--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/79zi452hphe7ecylhozy.gif)

A Promise is an object that contains a status, `PromiseStatus` and a value `PromiseValue`. In the above example, you can see that the value of `PromiseStatus` is "pending", and the value of the promise is undefined.

Don't worry - you'll never have to interact with this object, you can't even access the `PromiseStatus` and `PromiseValue` properties! However, the values of these properties are important when working with promises.

The value of the PromiseStatus, the state, can be one of three values:

* ✅ `fulfilled`: The promise has been `resolved`. Everything went fine, no errors occurred within the promise.
* ❌ `rejected` : The promise has been `rejected`, something went wrong..
* ⏳ pending: The promise has neither resolved nor rejected (yet), the promise is still pending.

Alright this all sounds great, but when is a promise status "pending", "fulfilled" or "rejected"? And why does that status even matter?

In the above example, we just passed the simple callback function () => {} to the Promise constructor. However, this callback function actually receives two arguments. The value of the first argument, often called resolve or res, is the method to be called when the Promise should resolve. The value of the second argument, often called reject or rej, is the value method to be called when the Promise should reject, something went wrong.

![promise](https://res.cloudinary.com/practicaldev/image/fetch/s--9A_mOYMP--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/duen4peq0bdr55cka5ya.png)

Let's try and see that gets logged when we invoke either the resolve or reject method! In my example, I called the resolve method res, and the reject method rej.

![reject](https://res.cloudinary.com/practicaldev/image/fetch/s--qKIq-sYt--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/z0b9v0h7aiq073l5tl2l.gif)

The value of a promise, the value of [[PromiseValue]], is the value that we pass to the either the resolved or rejected method as their argument.

**why**

```js
function getIMG(file) {
  return new Promise((res, rej) => {
    try {
      const data = readFile(file);
      resolve(data);
    } catch (err)
      reject(new Error(err))
  })
}
```

![get IMG](https://res.cloudinary.com/practicaldev/image/fetch/s--uERkfSWf--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/wsu5nn26dp4elcwh764m.gif)

there are built-in methods to get a promise's value. To a promise, we can attach 3 methods:

.then(): Gets called after a promise resolved.
.catch(): Gets called after a promise rejected.
.finally(): Always gets called, whether the promise resolved or rejected.

```js
getIMG(file)
  .then(img => console.log(img))
  .catch(err => console.log(err))
  .finally(() => console.log('all Done!'))
```

The .then method receives the value passed to the resolve method.

![then](https://res.cloudinary.com/practicaldev/image/fetch/s--DZld0c-0--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/11vxhn9cun7stpjbdi80.gif)

The .catch method receives the value passed to the rejected method

![catch](https://res.cloudinary.com/practicaldev/image/fetch/s--e9SZHcPk--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/v5y24jz4u89flazvdyn4.gif)

Finally, we have the value that got resolved by the promise without having that entire promise object! We can now do whatever we want with this value.

```js
getImage('link')
  .then(compressIMG(image, (compressedIMG, err)))
  .then(applyFilter(compressedIMG, (filteredIMG, err)))
  .then(saveIMG(filteredIMG) => console.log('success fully saved image!'))
  .catch(err => throw new Error(err))
```


## Async/Await

ES7 introduced a new way to add async behavior in JavaScript and make working with promises easier! With the introduction of the `async` and `await` keywords, we can create async functions which implicitly return a promise. But.. how can we do that? 

Previously, we saw that we can explicitly create promises using the Promise object, whether it was by typing new Promise(() => {}), Promise.resolve, or Promise.reject.

Instead of explicitly using the Promise object, we can now create asynchronous functions that implicitly return an object! This means that we no longer have to write any Promise object ourselves.

!(async)[https://res.cloudinary.com/practicaldev/image/fetch/s--5ED_HyNC--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/72lqrcvy9lc8ehbpitd0.png]

Although the fact that async functions implicitly return promises is pretty great, the real power of `async` functions can be seen when using the `await` keyword! With the `await` keyword, we can suspend the asynchronous function while we wait for the awaited value return a resolved promise. If we want to get the value of this resolved promise, like we previously did with the `then()` callback, we can assign variables to the awaited promise value!

![suspend](https://res.cloudinary.com/practicaldev/image/fetch/s--aOWmZxnV--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e5duygomitj9o455107a.gif)

![before func](https://res.cloudinary.com/practicaldev/image/fetch/s--bfscMU3t--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/d27d7xxiekczftjyic4b.gif)

First, the engine encounters a console.log. It gets popped onto the call stack, after which 'Before function!' gets logged.

![myFunc](https://res.cloudinary.com/practicaldev/image/fetch/s--wN7yFTnt--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/9wqej2269vmntfcuxs9t.gif)

Then, we invoke the async function `myFunc()`, after which the function body of `myFunc` runs. On the very first line within the function body, we call another `console.log`, this time with the string `In function!`. The `console.log` gets added to the call stack, logs the value, and gets popped off.

![await one](https://res.cloudinary.com/practicaldev/image/fetch/s--lX9JfreE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/lch6lutxnl88j0durpyh.gif)

The function body keeps on being executed, which gets us to the second line. Finally, we see an await keyword!

The first thing that happens is that the value that gets awaited gets executed: the function one in this case. It gets popped onto the call stack, and eventually returns a resolved promise. Once the promise has resolved and one returned a value, the engine encounters the await keyword.

When encountering an await keyword, the async function gets suspended. The execution of the function body gets paused, and the rest of the async function gets run in a microtask instead of a regular task!

![after func](https://res.cloudinary.com/practicaldev/image/fetch/s--UC78HoCO--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/b6l3psgewvtrtmrr60tg.gif)

Now that the async function `myFunc` is suspended as it encountered the await keyword, the engine jumps out of the async function and continues executing the code in the execution context in which the `async` function got called: the global execution context in this case!

![final](https://res.cloudinary.com/practicaldev/image/fetch/s--V8u36kEG--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/hlhrtuspjyrstifubdhs.gif)

Finally, there are no more tasks to run in the global execution context! The event loop checks to see if there are any `microtasks` queued up: and there are! The async `myFunc` function is queued up after resolving the valued of one. myFunc gets popped back onto the call stack, and continues running where it previously left off.

The variable res finally gets its value, namely the value of the resolved promise that one returned! We invoke console.log with the value of res: the string One! in this case. One! gets logged to the console and gets popped off the call stack! 😊

Finally, all done! Did you notice how `async` functions are different compared to a promise then? The `await` keyword suspends the `async` function, whereas the Promise body would've kept on being executed if we would've used then!

