//Unlike for Each filter() returns values

let numArray = [1,2,3,4,5,6,7,8,9,10]

//callback function inside filter
let result = numArray.filter( (numb) => numb > 3)
/*If we use scope here, like then we have to use return
(numb) => {
    return num > 3
    }
*/
console.log(result);    //it returns the result i.e why we were able to store them

//Using for each to get the same result

let newArr = [] //initialize an empty array

numArray.forEach( (numb) => {
    if (numb > 3) {
        newArr.push(numb)
    }
})

console.log(newArr);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userChoice = books.filter( (choice) => choice.genre == 'Fiction')
  let userChoice2 = books.filter( (choice) => choice.genre == 'Fiction' && choice.publish >= 1982)
  let userChoice1 = books.filter( (choice) => { return choice.publish >= 2000})

  console.log(userChoice);
  console.log(userChoice1);
  console.log(userChoice2);
  