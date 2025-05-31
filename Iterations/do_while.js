let personCount = 2

while (personCount < 40) {  
    console.log('Numbe is less than', personCount);
    personCount += 2
    // break   //print one time
    
}

//Using while loop to print array elements

let myArr = ['niki','fgdsg0','fsdfds','fsdf']

let index = 0
while (index <myArr.length) {
    console.log(`Array Value is ${myArr[index]}`);
    index += 1
}

//do-while loop is printed at-least once even if condition is not true

let score = 11

do {
    score++
    console.log(`Value is ${score}`);
    
} while (score <= 10);