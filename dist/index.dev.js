"use strict";

oddishOrEvenish = function oddishOrEvenish(number) {
  var kalan = number % 2;

  if (kalan == 0) {
    console.log("The number is even.");
  } else {
    console.log("The number is odd.");
  }
};

oddishOrEvenish(22);