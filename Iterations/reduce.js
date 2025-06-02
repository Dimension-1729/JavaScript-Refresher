/*
reduce pure array pe chalta rehta hai.....first time accumulator me initial value jaati hai phir add and repeat.
 
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10
*/

const numbers = [1,2,3,4,5]

let newTotal = numbers.reduce( function (acc, curval) {
    console.log(`Acc value is: ${acc} and Current Value is: ${curval}`);
    
    return acc + curval
}, 0)       //0 is initial value

console.log(newTotal);

//No using Arrow function

let nextTotal = numbers.reduce( (acc,curval) => acc+curval, 5)  //if no initial value is given it defaults to 0 automatically.
console.log(nextTotal);

//Adding shopping cart prices using reduce method

let products = [
    {language: 'js', price: 499},
    {language: 'py', price: 459},
    {language: 'css', price: 299},
    {language: 'html', price: 199},
]

//to access sub-items of object nested inside array, we can use item.propoerty
let totalCartValue = products.reduce((acc,item) => item.price+acc, 0)
console.log(totalCartValue);
