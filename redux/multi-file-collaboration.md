# split and merge

# reducer

reducer is a planning function, receiving the old state and returning the new state according to the plan

In a actual project, there are a large number of states, and each state require a planning function, What would it look like if they were all written together?

All plans are written in a reducer function, which will lead to large and complex

By experience, we'll definitely split out many reducer functions according to component dimensions, and then combine them through a function.

Let's manage two states, a counter and a info.

Their respective reducers

```js
/ * CounterReducer, a sub-reducer * /
/ * Note: The state received by counterReducer is state.counter * /
function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state;
  }
}
/ * InfoReducer, a child reducer * /
/ * Note: The state received by InfoReducer is state.info * /
function InfoReducer(state, action) {
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: action.name
      }
    case 'SET_DESCRIPTION':
      return {
        ...state,
        description: action.description
      }
    default:
      return state;
  }
}
```

Then we use the combineReducers function to combine multiple reducer functions into one reducer function. Probably used like this

```js
const reducer = combineReducers({
  counter: counterReducer,
  info: InfoReducer,
});
```

implement the combineReducers function

```js
function combineReducers(reducers) {

  /* reducerKeys = ['counter', 'info']*/
  const reducerKeys = Object.keys(reducers)

  / * Return the merged new reducer function * /
  return function combination(state = {}, action) {
    / * New state generated * /
    const nextState = {}

    / * Iterate through all reducers and integrate into a new state * /
    for (let i = 0; i < reducerKeys.length; i++) {
      const key = reducerKeys[i]
      const reducer = reducers[key]
      / * State of previous key * /
      const previousStateForKey = state[key]
      / * Execute sub-reducer to get new state * /
      const nextStateForKey = reducer(previousStateForKey, action)

      nextState[key] = nextStateForKey
    }
    return nextState;
  }
}
```

try the power of combineReducers

```js
const reducer = combineReducers({
  counter: counterReducer,
  info: InfoReducer
});

let  initState  =  {
  counter: {
    count: 0
  },
  info: {
    name : 'No name' , 
    description : 'We are all front-end enthusiasts! ' 
  }
}

let store = createStore(reducer, initState);

store.subscribe(() => {
  let state = store.getState();
  console.log(state.counter.count, state.info.name, state.info.description);
});
/ * Auto increment * /
store.dispatch({
  type: 'INCREMENT'
});

/ * Modify name * /
store.dispatch({
  type: 'SET_NAME',
  name : 'Front End No. 2 No. 2' 
});
```


# State

We still write the state together, which will cause the state tree to be huge, non-intuitive and difficult to maintain. We need to split, a state, a reducer to write a piece.

```js
/ * Counter writes its own state and reducer together * /
let  initState  =  {
  count:0 
}
function counterReducer(state,action){  
  / * Note: If state has no initial value, then give him the initial value! ! * /  
  if (!state) {
      state = initState;
  }
  switch (action.type) {
    case 'INCREMENT':
      return {
        count:state.count+1   
      }
    default:    
      return state;
  }
}

```

We modify the createStore function and add a line dispatch({ type: Symbol() })

```js
const createStore = function (reducer, initState) {
  let state = initState;
  let  listeners  =  [ ] ;

  function subscribe(listener) {
    listeners.push(listener);
  }

  function dispatch(action) {
    state = reducer(state, action);
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i];
      listener();
    }
  }

  function  getState ( )  {
    return state;
  }
  / * Attention!!! Only modified here, use a type that does not match any plan to get the initial value * /
  dispatch({ type: Symbol() })

  return {
    subscribe,
    dispatch,
    getState
  }
}
```
think about what effect this line can bring?

1. When createStore, use an action that does not match any type to trigger state = reducer(state, action)
2. Because action.type does not match, each sub-reducer will go to the default item and return its own initialized state, thus obtaining the initialized state tree.