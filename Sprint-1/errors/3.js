// const cardNumber = 4533787178994213;
//const last4Digits = cardNumber.slice(- 4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value


///==> my prediction: it won't work because carNumber is neither an array nor a string which means we cannot get the index the way we are doing now

// One way to solve this is: 
// 1. Convert carNumber into a string
// 2. subtracts 4 to the length of cardNumber to be able to extract the last 4 elements since we not dealing with and array
const cardNumber = 4533787178994213;
const carNumberStr = String(cardNumber)
const last4Digits = carNumberStr.slice(carNumberStr.length- 4);
console.log(last4Digits)

// Another way of solving this is:
//1.convert carNumberStr into an array
// 2.Get last 4 digits array using the slice method
// 3. Convert the last four digits arr into a string
// 4. Convert i back into a number
const carNumberArr = carNumberStr.split('')
const last4DigitsArr = carNumberArr.splice(-4)
const last4DigitsStr = last4DigitsArr.join('')
const last4DigitsN = Number(last4Digits)
console.log(last4DigitsN)

