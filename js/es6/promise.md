Promise 
========

### Promise/A+

Before implementing a promise that conforms to the Promise / A + specification, first understand the core of [Promise / A +]()

* Promise operation will only be in one of three states: pending state (pending), completed state (resolved) and failed state (rejected);

* The state of Promise will only appear from the uncompleted state to the completed state or the failed state;
*  Once the Promise status is changed, it cannot be changed;