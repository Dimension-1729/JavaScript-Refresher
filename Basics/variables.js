/*Use of ; is not mandatory in JS*/
const account = 456128;
let accountName = "Rohan";
// We don't use var now due to scope {} problem [block scope & Functional Scope]
var accountFname = "Preetpal"
// This also reserves memory and define a variable but  not recommended practice
accountMname = "Sunita Tyagi"
// Just defining a variable and not assigning any value: Value is set to undefined
let accountAge;
// Name getting updated
accountFname = "Shubhanshu" 

console.log(typeof(accountName));
/* New way of writting comments
console.log(accountName);
To get all variable values using single console.log;*/
console.table([account, accountFname, accountName,accountMname,accountAge])

