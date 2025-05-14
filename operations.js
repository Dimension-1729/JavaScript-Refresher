//For power
console.log(2**3);
//divide
console.log(2/3);
//Remainder
console.log(5%3);

//Simple Operation
let age = 12
let negAge = -age
console.log(negAge);

//Concating 2 strings
let str1 = "AMD"
let str2 = " FreeSync"
let str3 = str1 + str2
console.log(str3);

//Some tricky conversions
console.log("1" + 2);
console.log(1 + "2");
console.log(1+2+"2");
console.log("7"+8+6);

//" " will give empty value but with using + it will show 0, Never write confusing code, READABILITY.
console.log(+"");
console.log(+true);

 //Pre-fix & Post-fix Operations
let x = 3;
const y = x++;
// x is 4; y is 3

console.log(x);
console.log(y);


let a = 3;
const b = ++a;
// a is 4; b is 4

console.log(a);
console.log(b);