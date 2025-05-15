/*String Interpolation*/
const fName = "Rahul"
const sName = "Kumar"
console.log(`My name is ${fName} and surname ${sName}`);

//Declaring String using object & inside object constructor passing value

const fullName = new String('Santosh Kumar')
console.log(fullName);

/*String Methods */
//will return 0 index value
console.log(fName[0]);
//Returns lenght of string
console.log(fullName.length);
//Returns 5th character of a string
console.log(fullName.charAt(5));
//Will return index of character 'o
console.log(fullName.indexOf('o'));
//Upper-case
console.log(fullName.toUpperCase());

//sub-string method
const oldString = "My name is Mohamad"
let newString1 = oldString.substring(0,7)
console.log(newString1);

//slice method 
const newString2 = oldString.slice(-6, -4)
console.log(newString2);

//trim() removes empty spaces from string
let anotherString = "            Jodhpur               Delhi"
console.log(anotherString);
let trimString = anotherString.trim()
//So it only trims from start or end, not in between!
console.log(trimString);

//Replace method
const old_url = "https://incraft.in/new&45tables/origin"
console.log(old_url.replace('&45', '-'));


 //To check if it includes keyword or not
 console.log(old_url.includes('incraft'));
 console.log(old_url.includes('ink'));
 