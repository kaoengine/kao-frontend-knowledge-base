Promise 
========

### Promise/A+

Before implementing a promise that conforms to the Promise / A + specification, first understand the core of [Promise / A +]()

* Promise operation will only be in one of three states: pending state (pending), completed state (resolved) and failed state (rejected);

* The state of Promise will only appear from the uncompleted state to the completed state or the failed state;
*  Once the Promise status is changed, it cannot be changed;

### promise api

#### Promise.resolve()

Promise.resolve () There are 4 cases in parentheses

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