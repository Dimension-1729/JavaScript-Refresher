/*Arrow function, basic syntax
(num1, num2) => {
    console.log(num1 + num2);
    
}
*/
//Explicit return when using return keyword & {}

let addTwoNum = (num1,num2) => {
    return num1 + num2;     //Mandatory to use return keyword inside curly braces
    
}

console.log(addTwoNum(5,7))

//Implicit Return Arrow Function, no need to use return keyword

const mulNumb = (num1, num2) => console.log(num1*num2);
mulNumb(5,4)

//No need for return keyword here as no {} used
const divNumb = (num1, num2) => (num1/num2);
console.log(divNumb(8,4))

//To return an object using arrow keyword
const newFunc = (dip, wip) => ({Usnename: 'Sunil'})
console.log(newFunc()); //({}) in parameter
