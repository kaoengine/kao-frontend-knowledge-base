# this

A function's this keyword behaves a little differently in JavaScript compared to other languages. It also has some differences between [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) and non-strict mode.

In most cases, the value of this is determined by how a function is called (runtime binding). It can't be set by assignment during execution, and it may be different each time the function is called. ES5 introduced the [bind()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) method to [set the value of a function's this regardless of how it's called](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#The_bind_method), and ES2015 introduced arrow functions which don't provide their own this binding (it retains the this value of the enclosing lexical context).

### Example - Demo of this:

```js
const test = {
  prop: 42,
  func: function () {
    return this.prop;
  },
};

console.log(test.func());
// expected output: 42
```

> Note:
> A property of an execution context (global, function or eval) that, in non–strict mode, is always a reference to an object and in strict mode can be any value.

## Global Context :

In the global execution context (outside of any function), **_this_** refers to the global object whether in strict mode or not.

```js
// In web browsers, the window object is also the global object:
console.log(this === window); // true

a = 37;
console.log(window.a); // 37

this.b = "KAO";
console.log(window.b); // "KAO"
console.log(b); // "KAO"
```

> **_Note: You can always easily get the global object using the global [globalThis](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis) property, regardless of the current context in which your code is running._**

## Function Context:

Inside a function, the value of **_this_** depends on how the function is called.

Since the following code is not in strict mode, and because the value of **_this_** is not set by the call, this will default to the global object, which is [window](https://developer.mozilla.org/en-US/docs/Web/API/Window) in a browser.

```JS
function f1() {
  return this;
}

// In a browser:
f1() === window; // true

// In Node:
f1() === globalThis; // true
```

In strict mode, however, if the value of **_this_** is not set when entering an execution context, it remains as `**_undefined_**`, as shown in the following example:

```js
function f2() {
  "use strict"; // see strict mode
  return this;
}

f2() === undefined; // true
```

> In the second example, this should be `undefined`, because **_f2_** was called directly and not as a method or property of an object `(e.g. window.f2())`. This feature wasn't implemented in some browsers when they first started to support [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode). As a result, they incorrectly returned the `window` object.

To set the value of this to a particular value when calling a function, use [`call()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call), or [`apply()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) as in the examples below.

## Class context:

The behavior of **_this_** in [classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) and functions is similar, since classes are functions under the hood. But there are some differences and caveats.

Within a class constructor, `**_this_**` is a regular object. All non-static methods within the class are added to the prototype of `**_this_**`:

```JS
class Example {
  constructor() {
    const proto = Object.getPrototypeOf(this);
    console.log(Object.getOwnPropertyNames(proto));
  }
  first(){}
  second(){}
  static third(){}
}

new Example(); // ['constructor', 'first', 'second']
```

> Note: Static methods are not properties of `this`. They are properties of the `class` itself.

## Derived Class:

Unlike base class constructors, derived constructors have no initial this binding. Calling [`super()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super) creates a `this` binding within the constructor and essentially has the effect of evaluating the following line of code, where Base is the inherited class:

```js
this = new Base();
```

```diff
- > Warning: Referring to this before calling `super()` will throw an error.
```

Derived classes must not return before calling `super()`, unless they return an `Object` or have no constructor at all.

```JS
class Base {}
class Good extends Base {}
class AlsoGood extends Base {
  constructor() {
    return {a: 5};
  }
}
class Bad extends Base {
  constructor() {}
}

new Good();
new AlsoGood();
new Bad(); // ReferenceError
```

# Examples:

## **_this_** in function Contexts :

```JS
// An object can be passed as the first argument to call or apply and this will be bound to it.
var obj = {a: 'Custom'};

// We declare a variable and the variable is assigned to the global window as its property.
var a = 'Global';

function whatsThis() {
  return this.a;  // The value of this is dependent on how the function is called
}

whatsThis();          // 'Global' as this in the function isn't set, so it defaults to the global/window object
whatsThis.call(obj);  // 'Custom' as this in the function is set to obj
whatsThis.apply(obj); // 'Custom' as this in the function is set to obj
```

## **_this_** and object conversion :

```JS
function add(c, d) {
  return this.a + this.b + c + d;
}

var o = {a: 1, b: 3};

// The first parameter is the object to use as
// 'this', subsequent parameters are passed as
// arguments in the function call
add.call(o, 5, 7); // 16

// The first parameter is the object to use as
// 'this', the second is an array whose
// members are used as the arguments in the function call
add.apply(o, [10, 20]); // 34
```

> Note that in non–strict mode, with `call` and `apply`, if the value passed as this is not an object, an attempt will be made to convert it to an object. Values `null` and `undefined` become the global object. Primitives like `7` or `'foo'` will be converted to an Object using the related constructor, so the primitive number `7` is converted to an object as if by `**_new Number(7)_**` and the string `'foo'` to an object as if by `**_new String('foo')_**`, e.g.

```Js
function bar() {
  console.log(Object.prototype.toString.call(this));
}

bar.call(7);     // [object Number]
bar.call('foo'); // [object String]
bar.call(undefined); // [object global]
```

## The `bind` method:

ECMAScript 5 introduced [Function.prototype.bind().](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) Calling `f.bind(someObject)` **_creates a new function_** with the same body and scope as `f`, but where `this` occurs in the original function, in the new function it is permanently bound to the first argument of bind, regardless of how the function is being used.

```JS
function f() {
  return this.a;
}

var g = f.bind({a: 'azerty'});
console.log(g()); // azerty

var h = g.bind({a: 'yoo'}); // bind only works once!
console.log(h()); // azerty

var o = {a: 37, f: f, g: g, h: h};
console.log(o.a, o.f(), o.g(), o.h()); // 37,37, azerty, azerty
```

## Arrow Function :

In [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions), `this` retains the value of the enclosing lexical context's this. In global code, it will be set to the global object:

```JS
var globalObject = this;
var foo = (() => this);
console.log(foo() === globalObject); // true
```

Note: if this arg is passed to `call`, `bind`, or `apply` on invocation of an arrow function it will be ignored. You can still prepend arguments to the call, but the first argument `(thisArg)` should be set to `null`.

```JS
// Call as a method of an object
var obj = {func: foo};
console.log(obj.func() === globalObject); // true

// Attempt to set this using call
console.log(foo.call(obj) === globalObject); // true

// Attempt to set this using bind
foo = foo.bind(obj);
console.log(foo() === globalObject); // true
```

No matter what, `foo`'s `this` is set to what it was when it was created (in the example above, the global object). The same applies to arrow functions created inside other functions: their `this` remains that of the enclosing lexical context.

```js
// Create obj with a method bar that returns a function that
// returns its this. The returned function is created as
// an arrow function, so its this is permanently bound to the
// this of its enclosing function. The value of bar can be set
// in the call, which in turn sets the value of the
// returned function.
var obj = {
  bar: function () {
    var x = () => this;
    return x;
  },
};

// Call bar as a method of obj, setting its this to obj
// Assign a reference to the returned function to fn
var fn = obj.bar();

// Call fn without setting this, would normally default
// to the global object or undefined in strict mode
console.log(fn() === obj); // true

// But caution if you reference the method of obj without calling it
var fn2 = obj.bar;
// Calling the arrow function's this from inside the bar method()
// will now return window, because it follows the this from fn2.
console.log(fn2()() == window); // true
```

In the above, the function (call it anonymous function A) assigned to `obj.bar` returns another function (call it anonymous function B) that is created as an arrow function. As a result, function B's `this` is permanently set to the `this` of `obj.bar` (function A) when called. When the returned function (function B) is called, its `this` will always be what it was set to initially. In the above code example, function B's `this` is set to function A's `this` which is `obj`, so it remains set to `obj` even when called in a manner that would normally set its `this` to undefined or the global object (or any other method as in the previous example in the global execution context).

## As an object method :

When a function is called as a method of an object, its `this` is set to the object the method is called on.

In the following example, when `o.f()` is invoked, inside the function `this` is bound to the `o` object.

```JS
var o = {
  prop: 37,
  f: function() {
    return this.prop;
  }
};

console.log(o.f()); // 37
```

Note that this behavior is not at all affected by how or where the function was defined. In the previous example, we defined the function inline as the `f` member during the definition of `o`. However, we could have just as easily defined the function first and later attached it to `o.f`. Doing so results in the same behavior:

```JS
var o = {prop: 37};

function independent() {
  return this.prop;
}

o.f = independent;

console.log(o.f()); // 37
```

This demonstrates that it matters only that the function was invoked from the `f` member of `o`.

Similarly, the `this` binding is only affected by the most immediate member reference. In the following example, when we invoke the function, we call it as a method `g` of the object `o.b`. This time during execution, `this` inside the function will refer to `o.b`. The fact that the object is itself a member of `o` has no consequence; the most immediate reference is all that matters.

```JS
o.b = {g: independent, prop: 42};
console.log(o.b.g()); // 42
```

## `this` on the object's prototype chain

The same notion holds true for methods defined somewhere on the object's prototype chain. If the method is on an object's prototype chain, `this` refers to the object the method was called on, as if the method were on the object.

```js
var o = {
  f: function () {
    return this.a + this.b;
  },
};
var p = Object.create(o);
p.a = 1;
p.b = 4;

console.log(p.f()); // 5
```

In this example, the object assigned to the variable `p` doesn't have its own `f` property, it inherits it from its prototype. But it doesn't matter that the lookup for `f` eventually finds a member with that name on `o`; the lookup began as a reference to `p.f`, so `this` inside the function takes the value of the object referred to as `p`. That is, since `f` is called as a method of `p`, its `this` refers to `p`. This is an interesting feature of JavaScript's prototype inheritance.

## `this` with a getter or setter

Again, the same notion holds true when a function is invoked from a `getter` or a `setter`. A function used as getter or `setter` has its `this` bound to the object from which the property is being set or gotten.

```JS
function sum() {
  return this.a + this.b + this.c;
}

var o = {
  a: 1,
  b: 2,
  c: 3,
  get average() {
    return (this.a + this.b + this.c) / 3;
  }
};

Object.defineProperty(o, 'sum', {
    get: sum, enumerable: true, configurable: true});

console.log(o.average, o.sum); // 2, 6
```

## As a constructor:

When a function is used as a constructor (with the [new](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new) keyword), its `this` is bound to the new object being constructed.

> While the default for a constructor is to return the object referenced by `this`, it can instead return some other object (if the return value isn't an object, then the `this` object is returned).

```JS
/*
 * Constructors work like this:
 *
 * function MyConstructor(){
 *   // Actual function body code goes here.
 *   // Create properties on |this| as
 *   // desired by assigning to them.  E.g.,
 *   this.fum = "nom";
 *   // et cetera...
 *
 *   // If the function has a return statement that
 *   // returns an object, that object will be the
 *   // result of the |new| expression.  Otherwise,
 *   // the result of the expression is the object
 *   // currently bound to |this|
 *   // (i.e., the common case most usually seen).
 * }
 */

function C() {
  this.a = 37;
}

var o = new C();
console.log(o.a); // 37


function C2() {
  this.a = 37;
  return {a: 38};
}

o = new C2();
console.log(o.a); // 38
```

In the last example (`C2`), because an object was returned during construction, the new object that `this` was bound to simply gets discarded. (This essentially makes the statement `"this.a = 37;"` dead code. It's not exactly dead because it gets executed, but it can be eliminated with no outside effects.)

## As a DOM event handler:

When a function is used as an event handler, its `this` is set to the element on which the listener is placed (some browsers do not follow this convention for listeners added dynamically with methods other than [addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)).

```JS
// When called as a listener, turns the related element blue
function bluify(e) {
  // Always true
  console.log(this === e.currentTarget);
  // true when currentTarget and target are the same object
  console.log(this === e.target);
  this.style.backgroundColor = '#A5D9F3';
}

// Get a list of every element in the document
var elements = document.getElementsByTagName('*');

// Add bluify as a click listener so when the
// element is clicked on, it turns blue
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', bluify, false);
}
```

## In an inline event handler:

When the code is called from an [inline on-event handler](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers), its this is set to the DOM element on which the listener is placed:

```html
<button onclick="alert(this.tagName.toLowerCase());">
  Show this
</button>
```

The above `alert` shows button. Note however that only the outer code has its this set this way:

```html
<button onclick="alert((function() { return this; })());">
  Show inner this
</button>
```

In this case, the inner function's `this` isn't set so it returns the global/window object (i.e. the default object in non–strict mode where `this` isn't set by the call).

## this in classes :

Just like with regular functions, the value of `this` within methods depends on how they are called. Sometimes it is useful to override this behavior so that `this` within classes always refers to the class instance. To achieve this, bind the class methods in the constructor:

```JS
class Car {
  constructor() {
    // Bind sayBye but not sayHi to show the difference
    this.sayBye = this.sayBye.bind(this);
  }
  sayHi() {
    console.log(`Hello from ${this.name}`);
  }
  sayBye() {
    console.log(`Bye from ${this.name}`);
  }
  get name() {
    return 'Ferrari';
  }
}

class Bird {
  get name() {
    return 'Tweety';
  }
}

const car = new Car();
const bird = new Bird();

// The value of 'this' in methods depends on their caller
car.sayHi(); // Hello from Ferrari
bird.sayHi = car.sayHi;
bird.sayHi(); // Hello from Tweety

// For bound methods, 'this' doesn't depend on the caller
bird.sayBye = car.sayBye;
bird.sayBye();  // Bye from Ferrari

//I hope you would understand the reason bird.sayBye() outputing the result as name 'Ferrari'. If you don't, pls look at the class Car, the function sayBye() is binding this in constructor. And the get name() always returning 'Ferrari'
```

> Note: Classes are always strict mode code. Calling methods with an undefined `this` will throw an error.

# Another discussion:

#### Now I would like to dive deeper in Object: **_this_**:

Objects are usually created to represent entities of the real world, like users, orders and so on:

```js
let user = {
  name: "John",
  age: 30,
};
```

And, in the real world, a user can act: select something from the shopping cart, login, logout etc.

Actions are represented in JavaScript by functions in properties.

### Method examples:

For a start, let’s teach the user to say hello:

```JS
let user = {
  name: "John",
  age: 30
};

user.sayHi = function() {
  alert("Hello!");
};

user.sayHi(); // Hello!
```

Here we’ve just used a Function Expression to create the function and assign it to the property `user.sayHi` of the object.

Then we can call it. The user can now speak!

A function that is the property of an object is called its method.

So, here we’ve got a method `sayHi` of the object user.

Of course, we could use a pre-declared function as a method, like this:

```JS
let user = {
  // ...
};

// first, declare
function sayHi() {
  alert("Hello!");
};

// then add as a method
user.sayHi = sayHi;

user.sayHi(); // Hello!
```

### Method shorthand:

There exists a shorter syntax for methods in an object literal:

```JS
// these objects do the same
user = {
  sayHi: function() {
    alert("Hello");
  }
};

// method shorthand looks better, right?
user = {
  sayHi() { // same as "sayHi: function()"
    alert("Hello");
  }
};
```

As demonstrated, we can omit `"function"` and just write **_sayHi()_**.

To tell the truth, the notations are not fully identical. There are subtle differences related to object inheritance (to be covered later), but for now they do not matter. In almost all cases the shorter syntax is preferred.

### “this” in methods:

It’s common that an object method needs to access the information stored in the object to do its job.

For instance, the code inside `user.sayHi()` may need the name of the user.

To access the object, a method can use the `this` keyword.

The value of `this` is the object “before dot”, the one used to call the method.

For instance:

```JS
let user = {
  name: "John",
  age: 30,

  sayHi() {
    // "this" is the "current object"
    alert(this.name);
  }

};

user.sayHi(); // John
```

Here during the execution of `user.sayHi()`, the value of `this` will be `user`.

Technically, it’s also possible to access the object without `this`, by referencing it via the outer variable:

```js
let user = {
  name: "John",
  age: 30,

  sayHi() {
    alert(user.name); // "user" instead of "this"
  },
};
```

But such code is unreliable. If we decide to copy `user` to another variable, e.g. `admin = user` and overwrite `user` with something else, then it will access the wrong object.

That’s demonstrated below:

```js
let user = {
  name: "John",
  age: 30,

  sayHi() {
    alert(user.name); // leads to an error
  },
};

let admin = user;
user = null; // overwrite to make things obvious

admin.sayHi(); // VM420:1 Uncaught TypeError: admin.sayHI is not a function
```

If we used `this.name` instead of `user.name` inside the alert, then the code would work.

```js
let user = {
  name: "John",
  age: 30,

  sayHi() {
    alert(this.name); // replaced user.name as this.name
  },
};

let admin = user;
user = null; // overwrite to make things obvious

admin.sayHi(); //John
```

### “this” is not bound :

In JavaScript, keyword `this` behaves unlike most other programming languages. It can be used in any function.

There’s no syntax error in the following example:

```js
function sayHi() {
  alert(this.name);
}
```

The value of `this` is evaluated during the run-time, depending on the context.

For instance, here the same function is assigned to two different objects and has different `“this”` in the calls:

```js
let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  alert(this.name);
}

// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin["f"](); // Admin (dot or square brackets access the method – doesn't matter)
```

The rule is simple: if `obj.f()` is called, then `this` is `obj` during the call of `f`. So it’s either `user` or `admin` in the example above.

### Calling without an object: this == undefined:

We can even call the function without an object at all:

```js
function sayHi() {
  alert(this);
}

sayHi(); // undefined
```

In this case `this` is undefined in strict mode. If we try to access `this.name`, there will be an error.

In non-strict mode the value of `this` in such case will be the global object (`window` in a browser). This is a historical behavior that `"use strict"` fixes.

Usually such call is a programming error. If there’s this inside a function, it expects to be called in an object context.

### Arrow functions have no “this”:

**_Arrow functions are special: they don’t have their “own” `this`. If we reference `this` from such a function, it’s taken from the outer “normal” function._**

For instance, here `arrow()` uses this from the outer user.`sayHi()` method:

```js
let user = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  },
};

user.sayHi(); // Ilya
```

That’s a special feature of arrow functions, it’s useful when we actually do not want to have a separate `this`, but rather to take it from the outer context. Later in the chapter [Arrow functions revisited](https://javascript.info/arrow-functions) we’ll go more deeply into arrow functions.

# Summary of Objects `this`

- Functions that are stored in object properties are called “methods”.
- Methods allow objects to “act” like `object.doSomething()`.
- Methods can reference the object as `this`.

### The value of `this` is defined at run-time.

- When a function is declared, it may use `this`, but that `this` has no value until the function is called.
- A function can be copied between objects.
- When a function is called in the “method” syntax: `object.method()`, the value of `this` during the call is object.

> Please note that arrow functions are special: they have no `this`. When `this` is accessed inside an arrow function, it is taken from outside.
