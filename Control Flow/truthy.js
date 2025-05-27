/* When we have assummed a string is a truth value*/

//const userEmail = 'k@iol.com'
const userEmail = ''    //This will be false

if (userEmail) {    //no comparison just based on truthy
    console.log('User has Email');
} else {
    console.log('User does not have an Email');
    
}


/*Falsy Values:-
false
0
-0
BigInt 0n
""
null
undefined
NaN
*/

/*Truthy Values:-
true
[]  Empty Array
"0" This is a truthy value 0 inside a string
'false'     false inside string
" "     String with space
function(){}  //empty function is true value
{}  Empty object
*/

//To check if it's an empty array

const myArr = []
if (myArr.length === 0) {
    console.log("Array is empty");
    
}

//To check if an object is empty

const myObj = {}

if (Object.keys(myObj).length === 0) {    //We first converted object into array using keys() method and then used array "length" property to check array size.
    console.log('This is an empty array');
    
    
}