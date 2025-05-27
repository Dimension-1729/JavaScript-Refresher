const bros = ['harsh','prakhar','arjun','noni']
const sis = ['richa','disha','kirti','pooja','divya']
const newArr = [11,2,3,55,6]

//This will push the entire array at then end of array 1
// const family = bros.push(sis)  //because push() returns length and not new array
bros.push(sis)  

console.log(bros[4][2]);

//With concat [It will merge both arrays to a single array]
console.log(sis.concat(newArr));

//Spread Operator (It spreads array elements one by one into a single array as well)
console.log([...bros,...sis,...newArr]);

//flat; returns a new array with all sub-array elements concatenated into it recursively up to specified depth

const packedArray = [1,5,['kirti',-655,[11,'ram',21],'kumar'],658798]
console.log(packedArray.flat(Infinity));

//array.from and array.isArray Methods
console.log(Array.isArray('Virendra'));
console.log(Array.from('Namisha'));
console.log(Array.from({name: 'Kumar', serial: 5564, mobile: 56435434}));   //we need to provide on what value we need to create an array, if we do not provide it will return an empty array

//Array.of will combine arrays from variables, arrays etc.
let var1 = 'noobs'
let var2 = 4543
let arr5 = [12,215,13,'jjjjj']

console.log(Array.of(var1,var2,...arr5));   //...array to spread elements into a single array
