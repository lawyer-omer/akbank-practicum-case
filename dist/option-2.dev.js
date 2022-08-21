"use strict";

/* 
    This option is leveraged from a third party library (prompt-sync)
    So if you want to use this option on your local terminal; 
    Please run this command  before try ``` npm install ``` 
*/
var prompt = require("prompt-sync")();

var number = prompt("Enter a number: ");
var result = 0;
number.toString().split("").map(function (value) {
  result += parseInt(value);
});
var response = result % 2 == 0 ? "The number is even" : "The number is odd";
console.log("".concat(response));