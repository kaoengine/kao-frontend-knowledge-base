State manager
=======

# Simple state manager

state is data, such as count in a counter

```js
let state = {
  count: 1
}
```

Let's use the next start

```js
console.log(state.count);

```

Let's change state

```js
state.count = 2;
```


There is an obvious problem above: after the count is modified, the place where count is used can't receive notification, We can use the publish - subscribe model to solve this problem.

```js
/ * ------ count publisher subscriber practice ------ * /
let state = {
  count:1 
};
let  listeners  =  [ ] ;

/*subscription*/
function subscribe(listener) {
  listeners.push(listener);
}

function changeCount(count) {
  state.count = count;
  / * When the count changes, we are going to notify all subscribers * /
  for (let i = 0; i < listeners.length; i++) {
    const listener = listeners[i];
    listener();
  }
}
```

```js
/ * To subscribe, when the count changes, I want to output the new value in real time * /
const listener1 = () => console.log(state.count);
subscribe(listener1);

/ * Let ’s modify the state, of course we ca n’t change the state directly, we have to change it through changeCount * /
changeCount(2);
changeCount(3);
changeCount(4);

```

now, we're going to hit 2 new problem

* This state manager can only manage count, not universal
* Public code should be encapsulated

Solve the 2nd problem first

```js
const createStore = function (initState) {
  let state = initState;
  let  listeners  =  [ ] ;

  /*subscription*/
  function subscribe(listener) {
    listeners.push(listener);
  }

  function changeState(newState) {
    state = newState;
    /*Notice*/
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i];
      listener();
    }
  }

  function  getState ( )  {
    return state;
  }

  return {
    subscribe,
    changeState,
    getState
  }
}
```

Let's use this state manager to manage multiple state counters and info

```js
let  initState  =  {
  counter: {
    count: 0
  },
  info: {
    name: '',
    description: ''
  }
}

let store = createStore(initState);
const listener1 = () => {
  let state = store.getState();
  console.log(`${state.info.name}：${state.info.description}`);
}

const listener2 = () => {
  let state = store.getState();
  console.log(state.counter.count);
}

store.subscribe(listener1);
store.subscribe(listener2);

store.changeState({
  ...store.getState(),
  info: {
    name : 'Quan Tran' , 
    description : 'Front-end developer' 
  }
});

store.changeState({
  ...store.getState(),
  counter: {
    count: 1
  }
});
```

# Planned state manager

Implement a self-incrementing and decrementing counter.

```js
let  initState  =  {
  count:0 
}
let store = createStore(initState);

store.subscribe(()=>{  
  let state = store.getState();
  console.log(state.count);
});
/ * Self-increasing * /
store.changeState({
  count: store.getState().count + 1
});
/ * Self-decreasing * /
store.changeState({
  count: store.getState().count - 1
});
/ * Make different change * /
store.changeState({
  count: 'abc'
});
```

You must found the problem, count has been changed to a string `acb`, because we have no restrictions on the modification of count, anyone can modify it anywhere.

We need to be constrained and not allow unplanned count modifications. We only allow two ways of change: count increment and decrement!

Then we solve this problem in two steps

1. Develop the plan to modify the state and tell the store what my modification plan is.
2. Modify the store.changeState method to tell it to modify the state according to our plan

Let's set up a plan function, receive the current state, and an action, and return the new state after the change.

```js
/ * Note: action = {type: '', other: ''}, action must have a type attribute * /
function plan(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
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
```

We tell the store about this plan, store.changeState will change the state in the future according to our plan.

```js
/ * Add a parameter plan * /
const createStore = function (plan, initState) {
  let state = initState;
  let  listeners  =  [ ] ;

  function subscribe(listener) {
    listeners.push(listener);
  }

  function changeState(action) {
    / * Please modify the state according to my plan * /  
    state = plan(state, action);
    for (let i = 0;i<listeners.length;i++){     
      const listener = listeners[i];
      listener();
    }
  }

  function  getState ( )  {
    return state;
  }

  return {
    subscribe,
    changeState,
    getState
  }
}
```

try to use the new createStore to increase and decrease

```js
let  initState  =  {
  count:0 
}
/ * Put the plan function * /
let store = createStore(plan, initState);

store.subscribe(()=>{  
  let state = store.getState();
  console.log(state.count);
});
/ * increment * /
store.changeState({
  type: 'INCREMENT'
});
/ * Decrease * /
store.changeState({
  type: 'DECREMENT'
});
/ * I think that any unplanned changes are invalid! * /
store.changeState({
  count: 'abc'
});
```

Can we change the names for plan and changeState? plan changed to reducer, changeState changed to dispatch 
> (in fact because redux is so called)!
