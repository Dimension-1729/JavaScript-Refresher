const fileType = {
    js: 'javascript',
    py: 'python',
    cpp: 'c++',
    css: 'stylesheets'
}
//this will print all keys
for (const key in fileType) {
    console.log(key);
    
}

//to print both values and key pairs
for (const key in fileType) {
    console.log(key,':- ', fileType[key]);
    
}

//In arrays we can't use them directly like we did in for-of

let myArr = ['one','ttwo','four']

for (const key in myArr) {
   console.log(myArr[key]);
   
}

//Map is not iterable using this method, you wil get nothing if you apply for-in loop to map