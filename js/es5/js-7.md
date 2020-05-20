JS (Seven) simply talk about recursion
=================

## Recursive
* Write a function to achieve the factorial of n

```js
n! = n*(n-1)!;
    
function mul (n){
    if(n == 1){
        return 1;
    }
    return n*mul(n-1);
}
// recursive

mul ( 5 ) ;

// find patterns
// find out
// The only benefit is concise code
```

> mul(5) ==> 5*mul(4);

> mul(4) ==> 4*mul(3);

> mul(3) ==> 3*mul(2);

> mul(2) ==> 2*mul(1);

### Fibonacci sequence 


```js
// Find patterns
// Find the mouth
// Example: write a Fibonacci sequence
//fb(n) ==fb(n-1)+fb(n-2)
function fb(n){
    if( n == 1 ||n ==2 ){
        return 1;
    }
    return fb(n-1) + fb(n-2);
}
```

>fb(5) ==> fb(4) + fb(3)

>fb(4) ==> fb(3) + fb(2)

>fb(3) ==> fb(2) + ..