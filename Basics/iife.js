/*Immediately Invoked Function Expression: To immediately execute a function for;
1. Not polluting global variables or scope or for saving ourselves from pollution
2. like database connection must be running before app loads up.
*/

//we just have to use ()() side by side, one to wrap the function and second for executing it there and then.

//I will use arrow function with iife

const myFunc = ( () => {
    console.log('Hello ');
    
})();

//the normal function with iife;

/* ----------------IMPORTANT------------------
❌ 1. Missing semicolon before the IIFE (in previous code block)

If your file has code just before the IIFE without a semicolon, JavaScript might misinterpret it and throw a syntax error.
✅ Fix:

Make sure to terminate previous statements with ; before an IIFE:
*/

(function greeting(user){
    console.log(`Greeting to ${user}!`);  
})('nishant')


/*
Polluting Global Vatriables:
Adding too many variables or functions to the global scope, which can cause conflicts, bugs, and unpredictable behavior.

Imagine global scope is your living room floor.

If every script drops its tools and toys there, the room becomes a mess — anyone can trip over or break something.
IIFE or scoped variables are like keeping everything in a box — no mess, no accidents.
*/