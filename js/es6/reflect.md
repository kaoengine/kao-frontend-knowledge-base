Reflect
========


Reflect Is ES6 characteristic of the introduction of new, its purpose is to put some `JavaScript` specific attributes `api` pulled out. It has the following advantages:
• The return value is more reasonable

```js
var  obj  =  { }
// Define a property in obj
Object.defintProperty(obj, 'a',{
    value:2
})
// Using Object.defineProperty to repeatedly define the a property in obj will throw an error
try {
  Object.defineProperty(obj, 'a', { value: 3 })
} catch(e) {
  console.log(e) // Uncaught TypeError: Cannot redefine property: a
}
// Using Reflect.defineProperty to repeatedly define the a property in obj returns false
if (Reflect.defineProperty(obj, 'a', { value: 3 })) {
  console . log ( 'Attribute added successfully' )
}
```
The operation judgments of some object attributes are unified into function operations.

For example, `props in Obj` now can be written , another example can now be written as `Reflect.has(Obj, props)` `delete Obj[props]Reflect.deleteProperty(Obj, props)`

Synchronize with Proxy Handler method parameters