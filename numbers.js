const score = 600
/*To make sure the variable returns number only*/
const marks = new Number(900) //Defining in object
console.log(score);
console.log(marks);

//To convert number into string, also then we can use all string properties
console.log(score.toString().indexOf('0'));
console.log(score.toString().length);
//For precision value
console.log(score.toFixed(2));
//Precision value
const answer = 534135.1128
const answer2 = 123.89
console.log(answer.toPrecision(3)); //Will give 3 digit precision value
console.log(answer2.toPrecision(3));


 