/* 
    This option is leveraged from a third party library (prompt-sync)
    So if you want to use this option on your local terminal; 
    Please run this command  before try ``` npm install ``` 
*/

const prompt = require("prompt-sync")();

const number = prompt("Enter a number: ");
let result = 0 ;
number
.toString()
.split("")
.map(function (value) {
  result += parseInt(value);
});
const response = result % 2  == 0 ? "The number is even" : "The number is odd";
console.log(`${response}`);

