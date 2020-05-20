Several types of HTML5
======================

This article serves as an introduction to HTML5 and roughly categorizes commonly used APIs in HTML5.

### HTML5 DOM

1. getElementsByClassName
2. Traversal related, the following attributes on the left

>Only operations involving element nodes (other nodes are not involved), it is recommended to use the attributes on the left instead of the attributes on the right:

| Attribute name |  Replaced attributes |
|---|---|
|children   | childNodes  |
| childElementCount  |  childNodes.length |
|  previousElementSibling | previousSibling  |
|  nextElementSibling | nextSibling  |
|  firstElementChild | firstChild  |
|  lastElementChild | lastChild  |

3. ele.scrollIntoView ()
Call ele.scrollIntoView (), the top of the ele element will move to the top of the visible area ; if the parameter alignToTop: false is passed in , the ele will move to the bottom of the screen;

### HTML5 events

1. contextmenu
```html
< ul  id = "myMenu"  style = "position: absolute; visibility: hidden; background-color: silver" >
  < li > 111 </ li >
  < li > 222 </ li >
  < li > 333 </ li >
</ ul >
< script >
  var  menu  =  document . getElementById ( 'myMenu' )
  document . addEventListener ( 'contextmenu' ,  ( event ) => {  
    event . preventDefault ( )
    menu . style . left  =  event . clientX  +  'px'
    menu . style . top  =  event . clientY  +  'px'
    menu . style . visibility  =  'visible'
  } , false ) 
  document . addEventListener ( 'click' ,  ( event ) => {  
    menu . style . visibility  =  'hidden'
  } , false ) 
</ script >
```
2. DOMContentLoaded
Better than window.load execution

3. readystatechange
It can be used to judge whether the dynamically loaded script and link tags are loaded. The demo is as follows:

```html
const  script  =  document . createElement ( 'script' )
script . addEventListener ( 'readystatechange' , function eventListener ( event ) {   
  if  ( event . readyState  ===  'loaded'  | |  event . readyState  ===  'complete' )  { // hack means, the browser's own problem 
    script . removeEventListener ( 'readystatechange' , eventListener ) 
  }
} )

script . src  =  'example.js'
document . body . appendChild ( script )
```

4. hashchange

### HTML5 from

1. input/ textarea in new `autoFocus` fields
2. Form verification API


Use `checkValidate()`check `required`, `pattern="\d+"` property


### HTML5 script


1. Cross-document messaging (XDM), the core is postMessage[postMessage]('https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage)
2. Drag and drop api [HTML Drag and Drop API]('https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API')
Drag and drop API usage example
```html
< head >
  < style >
    #draggable  {
      width : 200px ; 
      height : 20px ; 
      text-align : center ; 
      background : white ; 
    }

    .dropzone  {
      width : 200px ; 
      height : 20px ; 
      background : blueviolet ; 
      margin-bottom : 10px ; 
      padding : 10px ; 
    }
  </ style >
</ head >

< body >
  < div  class = "dropzone" >
    < div  id = "draggable"  draggable = "true"  ondragstart = "event.dataTransfer.setData ('text / plain', null)" >
      This div is draggable
    </ div >
  </ div >
  < div  class = "dropzone" > </ div >
  < div  class = "dropzone" > </ div >
  < div  class = "dropzone" > </ div >
  < script >
    window . onload  =  function  ( )  {
      var  dragged

      document . addEventListener ( "dragstart" , function ( event ) {   
        dragged  =  event . target
      } , false ) 

      document . addEventListener ( "dragover" , function ( event ) {   
        // prevent default to allow drop
        event . preventDefault ( )
      } , false ) 

      document . addEventListener ( "drop" , function ( event ) {   
        // prevent default action (open as link for some elements)
        event . preventDefault ( )
        if  ( event . target . className  ==  "dropzone" )  {
          dragged . parentNode . removeChild ( dragged )
          event . target . appendChild ( dragged )
        }
      } , false ) 
    }
  </ script >
</ body >
```
3. Media elements <video>, <audio>
4. [History API]('https://developer.mozilla.org/en-US/docs/Web/API/History_API') (history)
The DOM Window object provides access to the browser's session history (not to be confused for WebExtensions history) through the history object. It exposes useful methods and properties that let you navigate back and forth through the user's history, and manipulate the contents of the history stack.
To move backward through history:

    >window.history.back()

    This acts exactly as if the user clicked on the Back button in their browser toolbar.

    Similarly, you can move forward (as if the user clicked the Forward button), like this:

    >window.history.forward()

### HTML5 storage

1. sessionStorage: The upper limit of the size is 2.5Mb (different browsers have differences), it will be cleared when the page is closed;
2. localStorage: The maximum size is 2.5Mb (different browsers will have differences), the page will not be emptied when closed;

Their APIs are also consistent, as follows:
• setItem (key, value)
• getItem (key)
• removeItem (key)
• clear ()

>Technologies related to storage beyond the scope of HTML5 are cookies (stored on the client, which can be generated by the client or the server, the maximum size is 4 kb), IndexedDB (the maximum size is 5 Mb), cacheStorage (ServiceWorker) .


### HTML5 JavaScript Api
1. `requestAnimationFrame(callback)`: Indicates that the specified callback function is executed before redrawing. Let's understand it through a simple demo.

```js
let  frame
function  callback ( timeStamp )  {
  console . log ( timeStamp ) // timestamp to start callback execution 
  // If you want to produce a looping animation effect, you need to call requestAnimationFrame () again in the callback function
  requestAnimationFrame ( callback )
}
frame  =  requestAnimationFrame ( callback ) // Call the callback before the next redraw 
// The following functions can be executed in the life cycle function of the destruction period
componentWillUnMount ( )  {
  cancelAnimationFrame ( frame )
}
```

Execute the above code, the console (chrome) prints the following data: 

1795953.649
1795970.318
1795986.987
1796003.656
17,96020.325
1796036.994

It can be seen that the time for one frame is approximately 16ms. requestAnimation can not only be used in animation, but also used by the React team to hack the implementation of requestIdleCallback. You can read the requestIdleCallback you do n’t know

2. (Web Worker)['https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers']