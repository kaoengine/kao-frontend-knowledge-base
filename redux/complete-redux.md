## Unsubscribe
Subscriptions that cannot be unsubscribed are rogues! We modify the store.subscribe method to add unsubscribe function

```js
function subscribe(listener) {
    listeners.push(listener);
    return function unsubscribe() {
      const index = listeners.indexOf(listener)
      listeners.splice(index, 1)
    }
  }
```

use

```js
const unsubscribe = store.subscribe(() => {
  let state = store.getState();
  console.log(state.counter.count);
});
/*Unsubscribe*/
unsubscribe();
```

## Middleware store

Now the middleware has got complete store, it can even modify our subscribe method. According to the minimum open strategy, we only need to give getState to the middleware! Because we only allow you to use the getState method!

Modify the store passed to middleware in applyMiddleware

```js
/*const chain = middle wares.map(middleware => middleware(store));*/
const simpleStore = { getState: store.getState };
const chain = middleWares.map(middleware => middleware(simpleStore));

```

## compose

In our applyMiddleware, [A, B, C] is converted to A(B(C(next))), this is achieved

```js
const chain = [A, B, C];
let dispatch = store.dispatch;
chain.reverse().map(middleware => {
   dispatch = middleware(dispatch);
});
```

redux provides a compose way that can help us do this

```js
const chain = [A,B,C];  
dispatch = compose(...chain)(store.dispatch)
```

Look how it achieved

```js
export default function compose(...funcs) {
  if (funcs.length === 1) {
    return funcs[0]
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}
```

> Of course, the compose function may be difficult for newcomers to understand, you only need what he does!

## Omitted initState

Sometimes we don’t pass initState when creating a store, how do we use it?

```js
const store = createStore(reducer, {}, rewriteCreateStoreFunc);
```

redux allow us to write like this

```js
const store = createStore(reducer, rewriteCreateStoreFunc);
```

We only need to change the createStore function. If the second parameter is an object, we think it is initState. If it is function, we think it is rewriteCreateStoreFunc.

```js
function createStore(reducer, initState, rewriteCreateStoreFunc){
    if (typeof initState === 'function'){
    rewriteCreateStoreFunc = initState;
    initState = undefined;
  }
  ...
}
```

## ReplaceReducer with 2 lines of code

After the reducer is split, there is a one-to-one correspondence with the components. We hope that when doing on-demand loading, the reducer can also load the component when necessary, and then replace the old reducer with the new reducer.


```js
const createStore = function (reducer, initState) {
  ...
  function replaceReducer(nextReducer) {
    reducer = nextReducer
    /*Refresh the state value again, the new reducer puts its default state on the state tree*/
    dispatch({ type: Symbol() })
  }
  ...
  return {
    ...
    replaceReducer
  }
}
```

Let's try to use

```js
const reducer = combineReducers({
  counter: counterReducer
});
const store = createStore(reducer);
​
/*Generate a new reducer*/
const nextReducer = combineReducers({
  counter: counterReducer,
  info: infoReducer
});
/*replaceReducer*/
store.replaceReducer(nextReducer);
```

## bindActionCreators

We rarely use bindActionCreators, and they are generally only used in the connect implementation of react-redux.

what is its job? Through closures, he hides dispatch and actionCreator so that other places can't perceive the existence of redux.

Let's try to hide dispatch and actionCreator in a common way, pay attention to the last two lines of code

```js
const reducer = combineReducers({
  counter: counterReducer,
  info: infoReducer
});
const store = createStore(reducer);

/*The function that returns action is called actionCreator*/
function  increment ( )  {
  return {
    type: 'INCREMENT'
  }
}

function setName(name) {
  return {
    type: 'SET_NAME',
    name: name
  }
}

const actions = {
  increment: function () {
    return store.dispatch(increment.apply(this, arguments))
  },
  setName: function () {
    return store.dispatch(setName.apply(this, arguments))
  }
}
/*Note: We can pass actions to anywhere*/
/*When implementing self-increase in other places, do not know the details of dispatch, actionCreator, etc.*/
actions.increment(); /*auto increment*/
actions.setName ( 'Nine Departments of Power ' ) ; /*Modify info.name*/ 
```

In my eyes, when this action was generated, a lot of public code was extracted.

