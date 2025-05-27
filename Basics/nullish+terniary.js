/*Nullish Coalescing Operator (??): null undefined 
It is a fallback operator, in case the value returned from above is in null or undefined it will assign the first value.
*/

let val1 = null ?? 45
let val2 = undefined ?? "Pass"

console.log(val1);
console.log(val2);

/*Terniary Operator

condition ? true : false

*/

const pricePareG = 25

pricePareG >= 50 ? console.log('Price is greater') : console.log('Price is less')
