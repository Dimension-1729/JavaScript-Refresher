/*Everything you declare here is Global Scope, and every thing inside {} like in if-else blocks, functions is block scope*/

var age = 30

if (true) {
    age = 21    //See this variable declared inside block scope is affecting global variable
    let age2 = 28
}

console.log(age);
// console.log(age2); //age2 is not defined

//Nested Scopes inside nested functions

function first(){
    const nameA = 'Rahul'
    function second(){
        const nameB = 'Sanjay'
        console.log(nameA);     //able to access block level scope of parent element
        
    }
    second()
    // console.log(nameB); //this will return error as outside scope
    
} 

first()