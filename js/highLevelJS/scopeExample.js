'use strict';

function calcAge(birthYear) {
    const age = 2021 - birthYear;
    //console.log(firstName);

    function printAge() {
        let output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log('output in the current scope of printAge() - 1: ', output); // GiaDieu, you are 33, born in 1988

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true; // Remember the VAR variable type , it is not the Block Scope 😄

            // I set another new variable inside the block scope, I mean NEW, because we are using const type variable with same variable name, so what do you think the result of const text? 😄 try it!
            const firstName = 'KhanhGay';

            const text = `Oh! You're a millenial, ${firstName}`;

            console.log('text: ', text);

            function add(a, b) {
                return a + b;
            }

            // reassigning outer scope's variable
            output = `New Output`;
        }

        // console.log(text);
        // Uncaught ReferenceError: text is not defined;

        console.log(millenial); // true

        // Uncaught ReferenceError: add is not defined; it proves that function are now in fact, block scope in strict mode; What happened if we remove 'use strict' try it 😄
        // console.log(add(2, 3));

        console.log(output); // New Output
    }

    printAge();
    return age;
}

const firstName = 'GiaDieu'; // Global variable

calcAge(1988);

//console.log(age);
// Uncaught ReferenceError: age is not defined

// printAge();
// Uncaught ReferenceError: printAge is not defined
