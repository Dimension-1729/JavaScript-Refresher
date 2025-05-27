"use strict"; //This will treat all JS code as new version of JS, it is default.

/*Javascript ka jo engine hai wo browser ke andar chuppa hua hai, alert (3 +3) is run inside a document. We're using nodejs, not browser.*/

let age = 18
let name = "Rohan"
let isLoggedIn = false
let firstName;

/*Primitive Data-Types
These work by, you're provided with a copied value and all the changes you make, you make it to that copied file and not the reference or orignial location*/

//number
//bigint
const bigNumb = 15153134738641352n //use of n automatically makes it bigInt
console.log(typeof(bigNumb));

//string
//boolean
//null => Standalone value [is representation of empty value] [Wo undefined nhi wo khaali hai]
let state = null
let state1 = "" //This is empty string different than null and undefined
//undefined => Abhi value assign nhi hui hai
//symbol => used in react for finding uniqueness, figma tools to identify individual componenets
const id = Symbol("abc123")
const anotherID = Symbol("abc123")
console.log(id === anotherID); //Even with same values, it id different this is the purpose of symbols


console.table([isLoggedIn,firstName,state,state1])
console.log(typeof state) //typeof of null is an object
console.log(typeof firstName); //type of undefined is undefined

/* Reference Type [Non-primitive]
In this direct memory reference can be allotted to you. 
Array
Objects 
Functions
*/
const heros = ["IronMan", "SpiderMan","Wolverine"]
let myObj = {
    name: "Rohan",
    age: 22
}
let myFunc = function print() {
    console.log("Hello World");
    
}



//web-events + objects mastery = Mastery in JS

/* Memory Types
Stack (Primitive), Heap(Non-Primitive) */  

let myUserName = "conio"
let anotherUserName = myUserName
anotherUserName = "Sushant"

console.log(myUserName); //This doesn't get changed because we were working on the copy and not the original data, as this is stack.
console.log(anotherUserName);


//Heap Example

let userOne = {
    name : "Himanshu",
    sex : "trans"

}

let userTwo = userOne

userTwo.name = "Ganga Prasad"
console.log(userOne);
console.log(userTwo);
