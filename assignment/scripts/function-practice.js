console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
};
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return `Hello, ${name}!`;
};
console.log(helloName('Fred'));
// Remember to call the function to test


// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
  // return firstNumber + secondNumber; 
  // ^^^Was the above line supposed to be there?^^^
};
console.log('This should return 17:', addNumbers(12, 5));


// 4. Function to multiply three numbers & return the result
function multiplyThree(un, du, troi) {
  return (un*du*troi);
};
console.log('Should return 40:' , multiplyThree(4, 5, 2));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  } else {
    return false;
  };
};

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome

console.log('First result is true:', isPositive(99));
console.log('Second is false:', isPositive(-12));

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let junkDrawer = ['scissors', 'fork', 'blowtorch', 'batteries', 'tape', 'spatula'];
function getLastItem(array) {
  return array.slice(-1);
};
//Thank you MDN for reminding me that I can use -1 to target the last item in an array
console.log(getLastItem(junkDrawer));

//This method doesn't check the automated check box, but it works. I'm writing a second one that will.
//Nevermind, it's mad that I didn't use numbers, let's try one more time.
let inventory = [13, 5, 91, -4, 8, 2];
function getLast(array) {
  return array.pop();
};
console.log(getLast(inventory));
console.log(inventory);
// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
let searchBox = [3, 12, 57, -2, 10245, 40, 0, -243];
let foundValue = false
function find(wantedValue, testItems) {
  for (let item = 0; foundValue != true && item < testItems.length; item++){
    if (testItems[item] === wantedValue){
      foundValue = true;
      return true;
    } else {
      return false;
    };
  };
};
console.log(find(41, searchBox));
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  const letters = string.split('');
  if (letter === string[0]){
    return true;
  } else {
    return false;
  };
};

console.log(isFirstLetter('a', 'ballways'));
// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  let currentIndex = 0;                //Create iterator for while loop
  // TODO: loop to add items
  while (currentIndex < array.length){ //Loop through entire array
    sum += array[currentIndex];        //Add current array value to sum
    currentIndex++;                    //Increment currentIndex
  };
  // TODO: return the sum
  return sum;                          //Return sum to be used outside of function
};
console.log(sumAll(inventory));        //Test function with inventory array


// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
let posValues = [];
function allPositive() {
  for (let currentIndex of searchBox){        //Loop through searchBox array
    if (currentIndex > 0){
      posValues.push(currentIndex);
    };
  };
};
console.log(allPositive(searchBox));
console.log(posValues);
// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
