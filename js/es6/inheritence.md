Differences between ES6 inheritance and ES5 inheritance
=======================================================

### Inherirance of ES5


#### Constructor-based inheritance
```js
function Parent1(){
    this.parent1  =  'parent1'
    this.arr  =  [ 1 , 2 , 3 ]  
}

Parent1.Prototype.Walk = 'I can walk'

function  Child1 ( )  {
  Parent1.Call ( this )
  this.child1  =  'child1'
}

const  child11  =  new  Child1 ()
const  child12  =  new  Child1 ()

child11.parent1 //prarent1
child11.Walk // undefined

child11.arr.push(4)
child11.arr //[1,2,3,4]
child12.arr //[1,2,3]
```

* <span style="color:white;background:green"> Advantages</span>: The properties of the constructor are unique (child11.arr and child12.arr), you can refer to the details in the Red Book

*  <span style="color:white;background:red">  Disadvantages</span>: You can only inherit the methods and properties of the parent class function, not the methods and properties of the prototype object


#### Inheritance based on prototype chain
```js
function  Parent2 ( )  {
  this.parent2  =  'parent2'
  this.arr  =  [ 1 , 2 , 3 ]  
}

Parent2.Prototype.Walk  =  'I can walk'

function  Child2 ( )  {
  this.child2  =  'child2'
}

Child2.Prototype  =  new  Parent2 ( )

const  child21  =  new  Child2 ( )
const  child22  =  new  Child2 ( )

// test
child21.parent2  // parent2
child21.walk     // I can walk

child21.arr.push ( 4 )
child21.arr  // [1, 2, 3, 4]
child22.arr  // [1, 2, 3, 4]
```
* <span style="color:white;background:green"> **Advantages** </span>: function inherited from the parent class inherits the methods and properties of the methods and properties of the prototype object 

* <span style="color:white;background:red">Disadvantage</span>: When modifying the properties and methods of the parent class in the instance of a subclass of other subclasses are also affected (corresponding change For properties on the prototype chain of subclasses, you can refer to the second brush elevation


------ Supplement ------

Add the API of Object.create () and classify it as inheritance based on prototype chain. It can be used when the inherited object properties have not change

**Advantages**: You can write one less constructor. 
**Disadvantages**: Same as the above-mentioned disadvantages based on prototype chain inheritance


#### Combined inheritance

```js
function  Parent3 ( )  {
  this.parent3  =  'parent3'
  this.arr  =  [ 1 , 2 , 3 ]  
}

Parent3.Prototype.Walk  =  'I can walk'

function  Child3 ( )  {
  Parent3.Call ( this ) // The first parent class is executed here  
  this.child3  =  'child3'
}

Child3.Prototype  =  new  Parent3 ( ) // The second parent class is executed here. Prototype inheritance found that as long as the parent and child prototype objects are bound, it can be written as Child3.prototype = new Parent3 ()> __ proto__ is also normal 
const  child31  =  new  Child3 ( )
const  child32  =  new  Child3 ( )

// test
child31.parent3  // parent3
child31.walk     // I can walk

child31.arr.push ( 4 )
child31.arr  // [1, 2, 3, 4]
child32.arr  // [1, 2, 3]
```

**Advantages**: combines the advantages of constructor inheritance and prototype chain inheritance

**Disadvantages**: The parent class method is called twice, and it is impossible to determine whether the instance's constructor is a child class or a parent class

#### Combination inheritance optimization one
```js
function  Parent4 ( )  {
  this.parent4  =  'parent4'
  this.arr  =  [ 1 , 2 , 3 ]  
}

Parent4.Prototype.Walk  =  'I can walk'

function  Child4 ( )  {
  Parent4.Call ( this )
  this.child4  =  'child4'
}

Child4.Prototype  =  Parent4.Prototype
const  child41  =  new  Child4 ( )
const  child42  =  new  Child4 ( )

// test
child41.parent4  // parent4
child41.walk     // I can walk

child41.arr.push ( 4 )
child41.arr  // [1, 2, 3, 4]
child42.arr  // [1, 2, 3]

child41.constructor  // Parent4
```
**Advantages**: Solved the problem of calling twice. 

**Disadvantages**: Cannot determine whether the instance's constructor is a subclass or a parent class (the constructors of child41 and child42 point to Parent4 at this time)


#### Combination inheritance optimization 2

```js
function  Parent5 ( )  {
  this.parent5  =  'parent5'
  this.arr  =  [ 1 , 2 , 3 ]  
}

Parent5.Prototype.Walk  =  'I can walk'

function  Child5 ( )  {
  Parent5.Call ( this )
  this.child5  =  'child5'
}

Child5.Prototype  =  Object.Create ( Parent5.Prototype ) // Object.create () creates an intermediate object, which plays the role of isolating child and parent classes. 
Child5.Prototype.Constructor  =  Child5
const  child51  =  new  Child5 ( )
const  child52  =  new  Child5 ( )

// test
child51.parent5  // parent5
child51.walk     // I can walk

child51.arr.push ( 4 )
child51.arr  // [1, 2, 3, 4]
child52.arr  // [1, 2, 3]

child51.constructor  // Child5
```
>The role of Object.create (): Object.create (Parent5.prototype) is equivalent to an empty object {}, the proto of this empty object is equal to Parent5.prototype, so this time we modify Child5.prototype.constructor is actually in the empty object Add the constructor attribute.

**Advantages**: Solved the problem of not being able to judge whether the instance's constructor is a subclass or a superclass


### Demystifying ES6's inherited super

#### super in contructor 
```js
function  Parent ( props )  {
  this.props  =  props
}

class  Child  extends  Parent  {
  constructor ( )  {
    super ( ) // here 
  }
}

var  child  =  new  Child ( { a : 1 } ) 

console.log ( child.props ) // undefined 
```
Why does child.props output undefined here, let us continue to look at the following two examples.

```js
function  Parent ( props )  {
  this.props  =  props
}

class  Child  extends  Parent  {
  constructor ( props )  {
    super ( props )
  }
}

var  child  =  new  Child ( { a : 1 } ) 

console.log ( child.props ) // {a: 1} 
```

It can be seen that the second case and the third case are equal. In inheritance, when the subclass does not write a constructor, it will automatically add the following code:

```js
constructor ( props )  {
  super ( props )
}
```
To make a simple conclusion: when there are constructors and supers in ES6 class functions, they must be followed by a parameter props (the name is arbitrary), otherwise the objects on the prototype chain cannot get the corresponding properties.

Translate it to ES5, the code is as follows:

```js
function  Parent ( props )  {
  this.props  =  props
}

function  Child ( props )  {
  Parent.Call ( this , props ) // This is equivalent to super (props) in ES6  
}

Child.Prototype  =  new  Parent ( )
var  child  =  new  Child ( { a : 1 } )
```


#### Super called as an object

```js
class  Parent  {
  parentFn ( )  {
    console.log ( 'I am parentFn' )
  }
  sealedParentFn(){
    console.log ( 'I am sealedParentFn' )
  }
}


class  Child  extends  Parent  {
  childFn ( )  {
    console.log ( super.constructor )
    super.parentFn ( )
  }
}

var  child  =  new  Child ( )
child.childFn ( )

// Class Parent {...}
// I am parentFn
```
The print result has been answered. When super is called as an object, it points to an instance of the parent class object.