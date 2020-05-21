Prototype and prototype chain
=============================

In JavaScript, you may often see unpredictable words such as prototype, prototype chain, prototype, __proto__, what exactly they are, and what role they play in JavaScript, let us together unveil this mysterious veil.

JavaScript is also an object-oriented language. Amazingly, before ES6, there was no class syntax in JavaScript. Everyone who has been exposed to university courses knows that C ++ is also object-oriented. Typical object-oriented languages create instance objects through classes.

```c++
// c ++ create object by class
class Cat {
    public:
        string color
}

Cat *cat = new Cat()
```

How does JavaScript solve this problem? This requires the introduction of a constructor.

### Constructor

In C++, we can know that a class is an abstraction of things. Through the class, you can generate conrete objects that are instantiated one by one. The class provides a "template" for generating objects. In Javascript, a contructor acts as a "template". Though the constructor, we can generate instantiated objects.


```js
function Cat() {
    this.color = 'orange'
}

var cat = new Cat()
console.log(cat.color)     // orange
```

In the abouve code, Cat is the constructor. Use the new keyword to  call the constructor to generate the instance object. We agree that the function name of the constructor should be capitalized. You can use the this keyword to add attributes inside the constructor.

### prototype

After understanding the constructor, let's take a look at the prototype keyword realated to the function. Each function has a prototype property, which is actually an object, we can look at it through the code.
![catphoto](https://cdn.nlark.com/yuque/0/2018/png/199663/1544770142082-b906f445-80a1-4a05-a2b1-50200f85ece4.png)


### __proto__

In javasript, each instance object has a private property `[[Prototype]]`, which points to the prototype of this instance object. You can access this property though ES6's Object.`getPrototypeOf()`, and many browser are also right `[[Prototype]]` implemented, that is, __proto__ that we often see, yes, __proto__ points to the prototype of the instance object, it is also an object.

```js
function Cat() {
    this.color = 'orange'
}

var cat = new Cat()
console.log(cat.__proto__)
console.log(Object.getPrototypeOf(cat) === cat.__proto__)  // true
```
![catphoto](https://cdn.nlark.com/yuque/0/2018/png/199663/1544770142082-b906f445-80a1-4a05-a2b1-50200f8


Attentively, you may find that the __proto__ of the instance object is equal to the prototype of the constructor that created the instance object. Yes, yes, the prototype of the constructor points to the prototype of the instance object created by calling the constructor. We can Take a look at the code.

```js
function Cat() {
    this.color = 'orange'
}

var cat = new Cat()

console.log(cat.__proto__ === Cat.prototype)   // true
```

Regarding the relationship between the prototype of the constructor and the __proto__ of the instance object, we can use a picture to show it.

### constructor

In the Cat.prototype print screenshot above, I believe you have seen the constructor field. The content of the field is a function, and the function name is the same as the constructor. It can be said that each prototype object has a constructor property that points to the associated constructor, so the constructor and the prototype of the constructor can point to each other.

```js
function Cat() {
    this.color = 'orange'
}

console.log(Cat.prototype.constructor === Cat)    // true
```
![contrcutor](https://cdn.nlark.com/yuque/0/2018/png/199663/1544775326033-e24180a5-3066-45e9-a2b7-4dfb765e33de.png)

### prototype
In the above, we understood the prototype. The prototype chain must be related to the prototype. Are the prototypes linked together? Let's take a look through the following code.
```js
function Cat() {
    this.color = 'orange'
}

Cat.prototype.age = 4

var cat = new Cat()

console.log(cat.color)    // orange
console.log(cat.age)      // 4
```

In the constructor, I did not set the age property, but set the age on the instance prototype, and then we can also access the age property through the instance object. 
In JavaScript, if you want to access a certain property, you will first look inside the instance object (cat). If you don't find it, you will find it on the prototype of the object (cat .__ proto__, namely Cat.prototype). 
We know that The prototype of the object is also an object. It also has a prototype. If the target attribute is not found on the prototype of the object, it will be searched on the prototype of the object's prototype (Cat.prototype .__ proto__), which is interpolated until the attribute or Reached the top floor. Looking layer by layer on the prototype, this is the prototype chain. So what is the top level of the prototype chain? We can test it in the console.


```js
function Cat() {
    this.color = 'orange'
}

var cat = new Cat()

console.log(Cat.prototype.__ptoto__)
```

We output the prototype of the instance object prototype in the console:

![](https://cdn.nlark.com/yuque/0/2018/png/199663/1544804543079-894a738b-520f-435f-ba9f-58830c695e40.png)


A lot of things are output. It seems that there is no reason. The more intuitive thing is that it is an object. The constructor on the first line is an `Object` function. As we mentioned above, each `prototype` object has a constructor property that points to the associated constructor, such as `Cat.prototype.constructor === Cat`. In the screenshot above, we can guess that `xx.prototype.constructor === Object`, you can know that xx is the constructor Object.

The output above is actually `Object.prototype`, let's verify it with code.

```js
function Cat() {
    this.color = 'orange'
}

console.log(Cat.prototype.__ptoto__ === Object.prototype)    // true
```

What if I look up again? What will the prototype of Object.prototype be?

```js
console.log(Object.prototype.__proto__)   // null
```

It is null, and null has no prototype, so Object.prototype is the top of the prototype chain. It can be said that all objects in JavaScript come from Object. Object is at the top of the prototype chain. Almost all instance objects of JavaScript are based on Object. We can update the picture:

![](https://cdn.nlark.com/yuque/0/2018/png/199663/1544807307596-1e74bf82-9587-458b-bcff-62dfd57b0c87.png)

### About inheritance
JavaScript inheritance is based on the prototype chain. Setting properties anywhere in the prototype chain can be accessed by the object. The role of the prototype is also here. It can contain properties and methods shared by all instances, just like the property is already The same as the instance object, rather than inheritance, it is better to say that the prototype chain has established a chain, which can be followed, and the instance object can access the properties and methods on this chain.

```js
var a = ['hello', 'world']
function f() {}

console.log(a.__proto__ === Array.prototype)      // true
console.log(f.__proto__ === Function.prototype)   // true
```

### summary
In this section we have studied the meaning of prototypes and prototype chains and some keywords related to them. JavaScript objects (except null) are associated with an object when they are created. This object is the prototype. Each object inherits properties from the prototype. The prototype is also an object, so the prototype also has prototype objects, layer by layer, until Object.prototype , This is the prototype chain. Each object will have a __proto__ property to access its own prototype, and this prototype is the value of the prototype property of the constructor that generates the object. Each prototype object has a constructor property that points to the associated constructor. In this section, you need to grasp: 
* what are the prototype and __proto__ related to prototype;
* where does construct point to; 
* prototype chain and inheritance.
 
