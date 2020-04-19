# What is a single page application

In early Web applications, the role of the front-end was weak, and business logic and data processing were on the back-end. The back-end returned an HTML page to the front-end, and the front-end was only responsible for presentation. In this mode, a single HTML page is regarded as a functional original. Form submission and hyperlink redirection can be used to re-request a new HTML page, thereby achieving the purpose of showing the user a new page. In this way, you can feel that the page is always refreshing. One click may need to wait for a long time, because when the page changes, all resources need to be re-requested. These problems led to poor user experience and wasted resources. The single-page application solves these problems very well.

### concept

What is a single page application? The full name of a single-page application is single-page application, referred to as SPA. It is a model of a website application. It can dynamically rewrite the current page to interact with the user without reloading the entire page. The fluency of single-page applications makes Web applications more like desktop or Native applications. Compared with traditional Web applications, single-page applications have achieved the separation of front and back ends. The back end is only responsible for processing data to provide interfaces, and page logic and page rendering are handed over to the front end. Since the development of the front-end, single-page applications have been widely used. At present, the fashionable front-end frameworks such as React, Vue, and Angular all adopt SPA principles. The single-page application means that the front-end has the initiative, and the front-end code is more complex and huge. Modularization, componentization, and architectural design have become increasingly important.

Come and experience the single-page application, open your Gmail , click the navigation bar on the left, you can see that the resource is loaded on demand in the Network of Developer Tools, at this time the page has not been refreshed, observe the under the Elements column HTML, you will find that the large frame of the entire HTML is unchanged. When the page changes, or when the route changes, the DOM tree only changes what it needs to change, that is, it changes dynamically.

### working principle

An important implementation of SPA is that the page is not refreshed when the route is changed. There are usually two ways to achieve this function: use window.history object or location.hash.

#### history object

window.history contains the historical information of the browser, it has the following common methods:

*  history.back (): the same as clicking the back button in the browser;
* history.forward (): same as clicking the button forward in the browser;
* history.go (n): accept an integer as a parameter, move to the page specified by the integer, for example, go (1) is equivalent to forward (), go (-1) is equivalent to back (), go (0) is equivalent to refresh The current page.

HTML5 adds pushState () and replaceState () methods to the history object. These two methods can add data to the history stack. The user feels that the browser url has changed, but the page has not been reloaded. pushState () is to add a new record to the browsing record, and replaceState () is to modify the current browser record. This is a slight difference between the two. The field and meaning of the parameter are the same when used.

```
window . history . pushState ( state , title , url ) 
```

* state is a state object, which can be read with history.state;
* title represents the title of the new page, but all current browsers will ignore this field, so you can pass null;
* url is the address of the new page and must be in the same domain as the current page.


When the user clicks the forward and backward buttons on the browser, or calls the back, forward, and go methods of window.history , the popstate event is triggered. This event is only for the same document. If the switching of browsing history causes different documents to be loaded, the popstate event will not be triggered. The state attribute in the parameters of the popstate event callback function points to the state provided by the pushState () and replaceState () methods for the current page, that is, the first parameter state passed when the pushState () and replaceState () methods are used.

We can use pushState () to simply simulate the browser's routing changes without refreshing the page.

```HTML
< A  class = "Spa" > spa1.html </ A >
< A  class = "Spa" > spa2.html </ A >

< button  onclick = "goBack ()" > back </ button >
< button  onclick = "goForward ()" > back </ button >
```

````js
document . querySelectorAll ( '.spa' ) . forEach ( ( item , index ) => {   
    item . addEventListener ( 'click' ,  ( e ) => {  
        e . preventDefault ( ) ;
        let  link  =  item . textContent ;
        window . history . pushState ( { name : `spa $ { index + 1 } ` } , link , link )     
        console . log ( link , 'pushState' ) 
    } , false ) 
} )

window . addEventListener ( 'popstate' ,  ( e ) => {  
    console . log ( e . state )
} )

function  goBack ( )  {
    window . history . back ( )
}

function  goForward ( )  {
    window . history . forward ( )
}
````

By listening to the click event and using pushState () to modify the history object, the following gif diagram demonstrates this process. It should be noted that the pushState () and replaceState () methods can only modify the route and cannot re-render the page. When demo / spa2.html is displayed in the browser address bar, it does not jump to the spa2.html page, nor does it check whether the spa2.html page exists, but just makes it the latest record in the browser history.

- [history object](../images/1550731002838-34e3ad28-2ffe-4a2f-89e9-959d1ded860f.gif)


#### hash
Hash is a property of the location object, which refers to the anchor of the current url, that is, the part starting from the # sign. Modifying location.hash and listening to the window's hashchange event can also achieve the same purpose.
```HTML
< A  class = "Spa" > spa1.html </ A >
< A  class = "Spa" > spa2.html </ A >
```

```js
document . querySelectorAll ( '.spa' ) . forEach ( ( item , index ) => {   
    item . addEventListener ( 'click' ,  ( e ) => {  
        e . preventDefault ( ) ;
        location . hash  =  index  +  1
    } , false ) 
} )

window . addEventListener ( 'hashchange' ,  ( e ) => {  
    console . log ( { hash : location . hash } )   
} )
```

The demonstration effect is as follows:
- [hash](../images/1550731247958-fcce7db5-412e-4d9b-a5c7-40e6f146ea39.gif)

#### Pros and cons
SPA is remarkable, and it has been widely used by everyone, and it is also supported by mainstream frameworks, but it also has limitations. We summarize its advantages and disadvantages as follows.
The advantages are:
* No refresh experience, users will not be "interrupted" frequently during the process of switching pages, because the interface framework is local, and the response to the user is very timely, thus improving the user experience;
* Separation of the front and back end concerns, the front end is responsible for interface display, the back end is responsible for data storage and calculation, and each does its own job, and will not mix the front and back end logic;
* To reduce the pressure on the server, the server only needs to output the data, regardless of the display logic and page synthesis, the throughput capacity will increase several times;
* API sharing, the same set of back-end program code can be used for various clients such as Web interface, mobile phone, tablet, etc. without modification;
* Complete front-end componentization , front-end development no longer takes pages as a unit, more adopts the idea of componentization, and the code structure and organization are more standardized, which is easy to modify and adjust.
The disadvantages are:
* It is not very good for SEO. Although it can be solved by Prerender pre-rendering optimization and other technologies, it is relatively difficult to index it;
* Error-prone, you need to use the program to manage forward, backward, address bar and other information;
* A higher front-end development threshold requires higher technical capabilities and requires a certain understanding of design patterns, because the face is not a simple page, but a desktop software running in a browser environment.

#### summary
In this section, we briefly understand SPA and its implementation at the routing level. In this section, you need to master:
* Understand what SPA is;
* The working principle of SPA routing;
* Understand the advantages and disadvantages of SPA.