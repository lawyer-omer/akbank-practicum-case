oddishOrEvenish= (number) => {
    let result = 0 ;
    number
    .toString()
    .split("")
    .map(function (value) {
      result += parseInt(value);
    });

  const response = result % 2  == 0 ? "The number is even" : "The number is odd";
  console.log(`${response}`);
};

oddishOrEvenish(43)
oddishOrEvenish(373)
oddishOrEvenish(4433)