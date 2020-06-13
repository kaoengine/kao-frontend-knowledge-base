JSX 
============

### React component

```js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class  App  extends  Component  {
  render() {
    return (
      <div className="App">
        <span>Hello, World.</span>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
```

`App` assemblies inherited `Component`, and its render method returns a "`html`", method looks like this for some `html` internal code embedded in JS. Obviously, this code can't be run direct on the browser env, which is not a normal JS

### What is JSX

`JSX` is a similar `XML` it's a syntax extension syntax can be compiled into "legal" JS 

How to describe this section with a "legal" JS code

So 's abstract a DOM into a JS object and describe the structure of the DOM with a properties of the object, such as tag names, attribute, sub-DOM, etc

describe the react component with JS object JSX


### Why?
React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display.


### Warning

Since `JSX` is closer to JavaScript than to HTML, React DOM uses `camelCase` property naming convention instead of HTML attribute names.

For example, `class` becomes `className` in JSX, and `tabindex` becomes `tabIndex`.

```js 
{
    tag : 'div' , 
    attrs: {
        className: 'App',
    },
    children: [
        {
            tag: 'span',
            text: 'Hello, World.'
        }
    ]
}
```

then the code in our first example will be come a "legal" JS code after compilation

```js
 render() {
    return (
      React.createElement(
            'div',
            { className: 'App' },
            React.createElement(
                'span',
                null,
                'Hello, World.'
            )
      )
    );
  }
```

```createElement` this func processes the input parameters and finally returns a JS object-based structure that we eventually want to get. Finally, by 
`ReactDOM.render` method, the resulting object is converted in to `DOM`

### At last 

At this point, we know that we write `JSX` will eventually be compiled in to JS object. It's because of this layer of abstraction that makes cross-platform possible. For all platforms with JS running env, we can execute it.

In addition, because it becomes an abstract JS Object, so we can diff/ patch (the comparison algorithm in React, which is used to update the `DOM` structure after  comparison). Instead of comparing the data when data changes `DOM`, this also greatly optimizes its performance