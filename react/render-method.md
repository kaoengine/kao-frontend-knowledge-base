The render method of the component 
======

inherited `React.Component` class to create components.

```js
class App extends React.Component {
  render() {
    const color = 'blue';
    return (
      <div>{color}</div>
    );
  }
```

a component class must have a render method, and render return the method JSX

### Conditional rendering

In practice scenario, we'll inevitably run into the need to display different content with different conditions. At this time, the conditional rendering method is most suitable

### if/else

The simplest, we can `render` write me