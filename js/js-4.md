JS (Four) conditional statements, loop statements
=================

## Conditional statement, loop statement

* Conditional statements
  * if
  * if else
* Switch statement
* loop statement
  * for
  * while
  * do....while


### if vs if...else...

1. if conditional statement, the method to be executed when the condition is true.

```js
if ( condition ) {
    // The method to execute when the condition is true
}
```

2. if ... else ... execute code when condition is true, execute other code when condition is false

```js
if ( condition ) {
    // The method to execute when the condition is true
} else {
    // The method to be executed when the condition is false
}
```

3. if ... else ... Another way of writing

```js
if  ( condition  1 )
  {
   Code executed when condition 1  is  true 
  }
else  if  ( condition  2 )
  {
   Code executed when condition 2  is  true 
  }
else
  {
   Code executed when neither condition 1  nor  condition  2  is  true 
  } 
```

### Switch Statement

The switch statement is used to perform different actions under different conditions.

```js
switch(n)
{
case 1:
  Execution code block  1
  break;
case 2:
  Execution code block  2
  break;
default:
  n  and  Case  . 1  and  Case  2  code is not executed at the same time
}
```

An example

```js
var n = "a";
switch(n){
    case "a":
        console.log("a");
        break;
    case 2:
        console.log("b");
        break;
    case  true :
        console.log("c");
        break;
    case 3:
        console.log("d"); 
        break;
}
// print out "a"
// You can use break to terminate the loop, which can only be written in the loop;
// continue, terminate this loop and proceed to the next loop
```

### loop statement

1. for loop. The code can be executed a specified number of times.

```js
for  ( statement  1 ; statement 2 ; statement 3 )    
  {
  // The code block to be executed
  };

for (var i=0;i<10;i++)
{
document.write(i);
}
```

2. while loop. The purpose of a while loop is to repeatedly execute a statement or block of code. If the condition is true, the code block can be executed all the time.

```js
while ( condition ) {
    // Code to be executed
}

var  i ;
while(i<10){
   document.write(i);
   i++;
}
```

3. do ... while loop. The code block is executed once before checking whether the condition is true, and then if the condition is true, the loop is repeated.

```js
do
  {
  // Code to be executed
  }
while  ( condition ) ;

do
  {
  document.write(i);
  i++;
  }
while (i<5);
```