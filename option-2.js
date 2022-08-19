/* 
    This option is leveraged from a third party library (prompt-sync)
    So if you want to use this option on your local terminal; 
    Please run this command  before try ``` npm install ``` 
*/

const prompt = require("prompt-sync")();

const number = prompt("Enter a number: ");
const result = (number % 2  == 0) ? "even" : "odd";
console.log(`The number is ${result}.`);

