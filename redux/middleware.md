# Middleware

Middleware is the most difficult place to understand in redux. But I challenge to understand it in the most popular language. If you have read this section and still don't understand what middleware is, and don't know how to write a middleware, that's my pot!

Middleware is an extension, or rewrite, to enhance the dispatch function!

## Log

I now have a requirement to record the state before modification, why it was modified, and the modified state every time the state is modified. We can achieve this by rewriting store.dispatch, looking directly at the code

```js
const store = createStore(reducer);
const next = store.dispatch;

/ * Rewritten store.dispatch * /;
store.dispatch = (action) => {
  console.log("this state", store.getState());
  console.log("action", action);
  next(action);
  console.log("next state", store.getState());
};
```

let's use

```js
store.dispatch({ type: "INCREMENT" });
```

the log output is

```text
this state { counter: { count: 0 } }
action { type: 'INCREMENT' }
1
next state { counter: { count: 1 } }
```

Now we have implemented a perfect function of recording state modification log!

## Record abnormal

I have another requirement, need to record the reason for each data error, we extend the dispatch

```js
const store = createStore(reducer);
const next = store.dispatch;

store.dispatch = (action) => {
  try {
    next(action);
  } catch (err) {
    console . error ( 'Error report: ' , err ) 
  }
}
```

In this way, every time an exception is dispatch, we will record it

### Multi-middledWare cooperation
Now, I need to record both logs and exceptions, what should I do?
Of course it's very simple, the two functions together!

```js
store.dispatch = (action)=>{  
  try {
    console.log('this state', store.getState());
    console.log('action', action);
    next(action);
    console.log('next state', store.getState());
  } catch (err) {
    console . error ( 'Error report: ' , err ) 
  }
}
```

What if there is another demand? Then change the dispatch function? What about 10 more needs? At that time, the dispatch function is definitely too big and chaotic to maintain! This method is not desirable!

We need to consider how to implement a highly scalable multi-middleware cooperation model.

1. We extract loggerMiddleware

```js
const store = createStore(reducer);
const next = store.dispatch;

const loggerMiddleware = (action) => {
  console.log('this state', store.getState());
  console.log('action', action);
  next(action);
  console.log('next state', store.getState());
}

store.dispatch = (action) => {
  try {
    loggerMiddleware(action);
  } catch (err) {
    console . error ( 'Error report: ' , err ) 
  }
}
```

2. We extract the exceptionMiddleware

```js
const exceptionMiddleware = (action) => {
  try {
    /*next(action)*/
    loggerMiddleware(action);
  } catch (err) {
    console . error ( 'Error report: ' , err ) 
  } 
}
store.dispatch = exceptionMiddleware;
```

3. The code now has a very serious problem, which is written exceptionMiddleware dead loggerMiddleware, we need to `next(action)` become a dynamic, just what middleware can

```js
const exceptionMiddleware = (next) => (action) => {
  try {
    /*loggerMiddleware(action);*/
    next(action);
  }catch(err){   
    console . error ( 'Error report: ' , err ) 
  } 
}
/*loggerMiddleware becomes the parameter to pass in*/
store.dispatch = exceptionMiddleware(loggerMiddleware);
```

4. In the same way, next in loggerMiddleware is always equal to store.dispatch, which makes it impossible to extend other middleware in loggerMiddleware! We also write next as dynamic

```js
const loggerMiddleware = (next) => (action) => {
  console.log('this state', store.getState());
  console.log('action', action);
  next(action);
  console.log('next state', store.getState());
}
```

So far, we have explored a highly scalable middleware cooperation model!

```js
const store = createStore(reducer);
const next = store.dispatch;

const loggerMiddleware = (next) => (action) => {
  console.log('this state', store.getState());
  console.log('action', action);
  next(action);
  console.log('next state', store.getState());
}

const exceptionMiddleware = (next) => (action) => {
  try {
    next(action);
  } catch (err) {
    console . error ( 'Error report: ' , err ) 
  }
}

store.dispatch = exceptionMiddleware(loggerMiddleware(next));
```

At this time, we happily created a new one `loggerMiddleware.js`, one `exceptionMiddleware.js` file, and wanted to separate the two middleware into separate files. Will you encounter any problems?

loggerMiddleware contains an external variable store, which prevents us from separating the middleware independently. Then let's pass store as a parameter~

```js
const store = createStore(reducer);
const next  = store.dispatch;

const loggerMiddleware = (store) => (next) => (action) => {
  console.log('this state', store.getState());
  console.log('action', action);
  next(action);
  console.log('next state', store.getState());
}

const exceptionMiddleware = (store) => (next) => (action) => {
  try {
    next(action);
  } catch (err) {
    console . error ( 'Error report: ' , err ) 
  }
}

const  logger  =  loggerMiddleware ( store ) ;
const exception = exceptionMiddleware(store);
store.dispatch = exception(logger(next));
```

So far, we have truly implemented two independent middleware!
Now I have a requirement to output the current timestamp before printing the log. Use middleware to achieve!

```js
const timeMiddleware = (store) => (next) => (action) => {
  console.log('time', new Date().getTime());
  next(action);
}
...
const time = timeMiddleware(store);
store.dispatch = exception(time(logger(next)));
```

In fact, we only need to know three middleware, the remaining details can be encapsulated! We achieve this by extending createStore!


First look at the expected usage

```js
/*Receive the old createStore and return the new createStore*/
const newCreateStore = applyMiddleware(exceptionMiddleware, timeMiddleware, loggerMiddleware)(createStore);

/*Returned a store where dispatch was rewritten*/
const store = newCreateStore(reducer);
```

Implement applyMiddleware

```js
const applyMiddleware = function (...middlewares) {
  /*Return a method to rewrite createStore*/
  return function rewriteCreateStoreFunc(oldCreateStore) {
     /*Return to the new createStore after rewriting*/
    return function newCreateStore(reducer, initState) {
      /*1. Generate store*/
      const store = oldCreateStore(reducer, initState);
      /*Send store to each middleware, equivalent to const logger = loggerMiddleware(store);*/
      /* const chain = [exception, time, logger]*/
      const chain = middlewares.map(middleware => middleware(store));
      let dispatch = store.dispatch;
      /* Implement exception(time((logger(dispatch))))*/
      chain.reverse().map(middleware => {
        dispatch = middleware(dispatch);
      });

      /*2. Rewrite dispatch*/
      store.dispatch = dispatch;
      return store;
    }
  }
}
```

**Make the user experience better**

Now there is a small problem, we have two kinds of createStore

```js
/*CreateStore without middleware*/
import { createStore } from './redux';
const store = createStore(reducer, initState);

/*CreateStore with middleware*/
const rewriteCreateStoreFunc = applyMiddleware(exceptionMiddleware, timeMiddleware, loggerMiddleware);
const newCreateStore = rewriteCreateStoreFunc(createStore);
const store = newCreateStore(reducer, initState);
```

In order to make users use it more uniformly, we can simply make their usage consistent, we modify the createStore method

```js
const createStore = (reducer, initState, rewriteCreateStoreFunc) => {
    /*If there is rewriteCreateStoreFunc, then use the new createStore */
    if(rewriteCreateStoreFunc){
       const newCreateStore =  rewriteCreateStoreFunc(createStore);
       return newCreateStore(reducer, initState);
    }
    /*Otherwise follow the normal process*/
    ...
}
```

Final usage

```js
const rewriteCreateStoreFunc = applyMiddleware(exceptionMiddleware, timeMiddleware, loggerMiddleware);

const store = createStore(reducer, initState, rewriteCreateStoreFunc);
```

 