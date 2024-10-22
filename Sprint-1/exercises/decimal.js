const num = 56.5678;

// Create a variable called wholeNumberPart and assign to it an expression that evaluates to 56 ( the whole number part of num )
// we should use the Math.floor() method which  always rounds down and returns the largest integer less than or equal to a given number.
// source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
const wholeNumberPart = Math.floor(num);

// Create a variable called decimalPart and assign to it an expression that evaluates to 0.5678 ( the decimal part of num )
// We need to :
// 1. subtract num to wholeNumberPart to get the decimal part
// 2. use the to.Fixed() to method to get only 4 digits of the decimal part which convert decimalPart variable into a string
// 3. use the parseFloat() to convert it back into a floating pointing value
const decimalPart = parseFloat((num - wholeNumberPart).toFixed(4));

// Create a variable called roundedNum and assign to it an expression that evaluates to 57 ( num rounded to the nearest whole number )
// we should use the Math.round() method which returns the value of a number rounded to the nearest integer instead of Math.ceil which always rounds up and returns the smallest integer greater than or equal to a given number.
// source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
const roundedNum = Math.round(num);

// Log your variables to the console to check your answers
// console.log("whole number part", wholeNumberPart);
// console.log("decimal part = ", decimalPart);
// console.log("rounded number = ", roundedNum);

