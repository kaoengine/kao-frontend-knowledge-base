decorator
=========

### Introduction to decorators

In some scenarios, it is necessary to extend some functions without changing the original class and class attributes, which is why the decorator appears.

As a model (for example, one kind of functional modules dynamically add or delete redux middleware mechanism ), the same decoration is highly dynamic flexibility, just prior to adding the class or class attributes @方法名to complete the respective functions of class or class method The change.

But the decorator pattern is still in the phase 2 [proposal](https://github.com/tc39/proposal-decorators) , before using it requires the use of babel modules [transform-decorators-legacycompiled](https://babeljs.io/docs/en/babel-plugin-transform-decorators) into ES5 or ES6.

In TypeScript's [lib.es5.d.ts](https://github.com/Microsoft/TypeScript/blob/c48662c891ce810f5627a0f6a8594049cccceeb5/lib/lib.es5.d.ts#L1291) , four different decorator interfaces are defined:

```ts
declare type ClassDecorator = <TFunction extends Function>(target: TFunction) => TFunction | void;
declare type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void;
declare type MethodDecorator = <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void;
declare type ParameterDecorator = (target: Object, propertyKey: string | symbol, parameterIndex: number) => void;
```

Next, the decoration class and decoration class methods will be analyzed

### Decorators acting on classes

When the decorated object is a class, we operate this @
```js
@log
class MyClass{}
function log(target){
     // The target here is the class MyClass 
      target.prototype.logger  =  ( ) => `$ { target.name } was called`   
}
const  test  =  new  MyClass ( )
test.logger ( ) // MyClass is called 
```

Since the decorator is an expression, we can also add a parameter after the decorator:

```js
@ log ( 'hello' )
class  MyClass  {  }

function  log ( text )  {
  return  function ( target )  {
    target.prototype.logger  =  ( ) => `$ { text } , $ { target.name } is called`   
  }
}

const  test  =  new  MyClass ( )
test.logger ( ) // hello, MyClass is called 
```

In using redux, we most often use react-redux as follows:

```js
@connect(mapStateToProps, mapDispatchToProps)
export default class MyComponent extends React.Component {}
```

After the above analysis, we know that the above writing is equivalent to the following writing:

```js
class MyComponent extends React.Component {}
export default connect(mapStateToProps, mapDispatchToProps)(MyComponent)
```

### Decorator acting on class methods

Unlike decorative classes, the essence of the decoration of class methods is to manipulate their descriptors. At this time, the decorator can be construed as Object.`defineProperty(obj, prop, descriptor)` syntactic sugar, see the following code:

```js
class C{
    @readonly(false)
    method(){ console.log('cat) }
}

function  readonly ( value )  {
  return  function  ( target , key , descriptor ) { 
    // where target is C.prototype; key is method;    
    // The original descriptor is: {value: f, enumarable: false, writable: true, configurable: true}
    descriptor.writable  =  value
    return  descriptor
  }

  const  c  =  new  C ( )
    c.method  =  ( ) => console.log ( 'dog' )  

    c.method ( ) // cat 
}
```

It can be seen that the three parameters received by the decorator function are exactly the same as Object.defineProperty. The specific implementation can be seen in the converted code of babel. The main implementation is as follows:

```js
var C = (function() {
  class C {
    method() { console.log('cat') }
  }

  var temp
  temp = readonly(false)(C.prototype, 'method',
    temp = Object.getOwnPropertyDescriptor(C.prototype, 'method')) || temp 
   // Get the descriptor passed to the decorator function by Object.getOwnPropertyDescriptor 

  if (temp) Object.defineProperty(C.prototype, 'method', temp)
  return C
})()
```

Let's look at it again if there are multiple decorators acting on the same method?

```js
class  C  {
  @ readonly ( false )
  @ log
  method ( )  {  }
}
```

The code after babel conversion is as follows:


```js
desc  =  [ readonly ( false ) , log ] 
    . slice ( )
    . reverse ( )
    . reduce ( function ( desc , decorator ) {  
      return  decorator ( target , property , desc ) | | desc ;    
    } , desc ) ;

```

It can be clearly seen that after reverse reverse order, the decorator method will be executed from the inside out.

#### Related Links
[javascript-decorators ](https://github.com/wycats/javascript-decorators)
[Javascript decorator ](https://aotu.io/notes/2016/10/24/decorator/index.html)
[JS decorator (Decorator) scene combat ](https://juejin.im/post/59f1c484f265da431c6f8940)
[decorator ](https://es6.ruanyifeng.com/#docs/decorator#%E6%96%B9%E6%B3%95%E7%9A%84%E4%BF%AE%E9%A5%B0)
[Babel](https://babeljs.io/)