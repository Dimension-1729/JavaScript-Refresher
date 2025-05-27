/*Dates are calculated since the midnight at beginning of Jan, 1st 1970 and is calculated in ms*/

let todayDate = new Date()
console.log(todayDate.toString());  //toString() converts date into readable version
console.log(todayDate.toDateString());  //toDateString() only shows date and day but no time
console.log(todayDate.toISOString());  //toISOString() original method with new Date() gives in Z at the end
console.log(todayDate.toLocaleDateString());  //toLocaleDateString() only date is shown
console.log(todayDate.toLocaleTimeString());  //toLocaleTimeString() only time with AM/PM is shown
console.log(todayDate.toLocaleString());  //toLocaleString() shows both date and time

//To create manual date; Format [Year, month, date]
let manualDate = new Date(2025, 0, 23)  //First Method
console.log(manualDate.toDateString());

let manualDateTime = new Date(2024,11,25,12,45)   //Second Method
console.log(manualDateTime.toLocaleString());   

let manualDate2 = new Date("2025-02-28")    //or we can give mm-dd-yy
console.log(manualDate2.toDateString());

//For comparing time, like locking in winners
let newDate = Date.now()
console.log(newDate); //Time-stamp in ms

// console.log(newDate.getTime()); This will result in error because newDate is a number, not a Date object

//For this purpose I have to create a date object and then call get time on date object

let birthDate = new Date()
console.log(birthDate.getTime());
console.log(birthDate.getMonth() + 1);  //+1 so user doesn't get confused as month start from 0

//Further Customizations in localeString Method

console.log(birthDate.toLocaleString('default', {
    weekday: "long",
    month: "long",
    // era: "long",
}));
