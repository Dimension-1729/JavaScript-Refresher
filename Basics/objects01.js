/*There are two ways to declare an object either literal or constructor
//singleton
// object literals
Whenever we declare using literal we do not get a singleton, we only get singleton from constructor

Object.create // Constructor method, this will make signleton
const JsUser = {}
*/
/*-------------------OBJECT LITERAL WAY----------------------*/
//Declaring a symbol & accessing it through object
const newSymbol = Symbol("susu")

const employer = {
    name: "Vinod Sumti",
    Age: 48,
    "email" : "sumti@yahoo.co.in",
    address : "34, New Vihar Moradabad",
    Salary: 456621,
    [newSymbol] : "pisu"
}

//Ways to access object data
console.log(employer.address);
console.log(employer["email"]); //two ways using dot or []
console.log(employer.email);

//Accessing symbol stored in object
console.log(employer[newSymbol]);


//If you're inspecting an object and want to check if a property is a Symbol
const symbols = Object.getOwnPropertySymbols(employer);

symbols.forEach(sym => {
  console.log(sym, typeof sym); // Logs the symbol and confirms it's type "symbol"
});

//Updating a property of object
employer.email = "vinodkumar@benq.com"
console.log(employer);

//Freezing an object so it's value doesn't change, it does not return error when someone tries though
// Object.freeze(employer)
employer.email = "kumarsanu@haier.in"
console.log(employer);

//Adding function or property to an object
employer.welcome = function(){
    console.log('Hello, my beloved');
    
}
console.log(employer.welcome());

//Using "this" to call or reference internal properties defined in an object.

employer.nameFunc = function(){
    console.log(`Employer Name is: ${this.name}`);
    
}

//console.log(employer.nameFunc()); //Just call the function, no console log needed because welcome() return? Nothing. Its default return is undefined.Then you're passing that undefined to console.log which returns undefined.

//Instead directly call the function.
employer.nameFunc()