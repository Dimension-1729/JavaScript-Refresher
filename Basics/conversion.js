// let scoreA = "33"
let scoreA = null //It will give 0 in this case.
// let scoreB = "33abc" //this will result in not a number [NAN]
// let scoreB = undefined //NaN
let scoreB = "" //Will also give 0, as it's interpreted as false value
//For converting a string to a number
let scoreInNumberA = Number(scoreA)
let scoreInNumberB = Number(scoreB)

console.log(typeof(scoreInNumberA));
console.log(typeof(scoreInNumberB));
console.log(scoreInNumberA);
console.log(scoreInNumberB);

/* Boolean Conversion*/

// let isLoggedIn = 1
let isLoggedIn = "shiva" //This will also result in true
let booleanValue = Boolean(isLoggedIn)
console.log(booleanValue);

/* String Conversion */

let ifOpted = true
let stringValue = String(ifOpted)
console.log(stringValue);
console.log(typeof(stringValue));

