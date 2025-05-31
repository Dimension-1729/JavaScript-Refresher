 //A simple for loop
 /*
 for (let index = 0; index < 11; index++) {
    const element = index;
    if (element == 9) {
        console.log(`${element} is number nine.`);
        break;      //this will break the for and if here
    }
    console.log(element);
    
    
 }
 */

//Using 2 loops to print tables upto 20

 for (let i = 1; i <= 20; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} =`, j*i );
    }
 }

 //Using for loop on array

 let newArray = ['rohan', 'subhan','shaqil']

 for (let index = 0; index < newArray.length; index++) {
    const element = newArray[index];
    console.log(element);
    
    
 }
