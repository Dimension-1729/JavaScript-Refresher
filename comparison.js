//TypeScript doesn't allow you to compare 2 different datatypes

console.log("2" > 1);
console.log("02" > 1);

/*Equality check == amd comparisons >< >= <= works differently. Comparisons convert null to a number, treating it as 0 i.e why null >= 0 is true & null > 0 is false.*/

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

//for all other values with undefined it will give 0
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === It checks not only value but data type as well.

console.log("3" === 3);
