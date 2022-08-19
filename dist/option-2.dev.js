"use strict";

/* 
    This option is leveraged from a third party library (prompt-sync)
    So if you want to use this option on your local terminal; 
    Please run this command  before try ``` npm install ``` 
*/
var prompt = require("prompt-sync")();

var number = prompt("Enter a number: ");
var result = number % 2 == 0 ? "even" : "odd";
console.log("The number is ".concat(result, "."));