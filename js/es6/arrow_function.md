Arrow function
========================


### What is a Arrow function
![=>](https://i.github-camo.com/4a67da6de093672b50a3a363933539f9d261e63a/68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f6765726d74622f676966732f6d61737465722f746f2d6172726f772e676966)

Understand the essence of this in the down arrow function, look at the following code:

```js
    () => console.log(this)
```

The ES5 code after babel conversion is as follows

```js
    var self = this
    (function() {
        console.log(self)
    })
```

`Conslusion`: The value of this in the arrow function is equal this in the current scope of the arrow function. 

#### Some difficult to understand scenarios of arrow functions
There is the following html code,
```html
    <body>
        <input/>
    </body>
```

Add the follwing Javascript script to test this pointing:

```js
    var inputTest = document.getElementsByTagName ('input')
    inputTest[0].addEventListener('click', function(){
        console.log(this) //point to input
    })
    inputTest[0].addEventListener('click', function(){
        console.log(this) //window
    })
```

The above paragraph is a common way to bind events to dom nodes, but this is very strange, ES5 points to it `<input/>`, but ES6 points to window. As for the reason, it is actually caused by the callback function (it depends on the code when the browser triggers the event). Coupled with the particularity of the arrow function, the above confusing code snippet is produced.

### Arrow function tip
When the result returned by the arrow function is an object, pay attention to the details of the writing:

```js
const  result1  =  ( ) => ( { a : 1 } )     
const  result2  =  ( ) => { return { a : 1 } } 
```