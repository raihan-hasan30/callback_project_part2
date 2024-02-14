/*******************************************************************************
Write a function `multiMap` that accepts a value, a number n, and a callback.
The function should return the new value that results from running the original value
through the callback n times.

Examples:

let result1 = multiMap(7, 2, function(n) {
  return n * 10;
});
console.log(result1); // 700

let result2 = multiMap(7, 3, function(n) {
    return n * 10;
});
console.log(result2); // 7000

let result3 = multiMap("hi", 5, function(s) {
  return s + "!";
});
console.log(result3); // hi!!!!!
*******************************************************************************/
/*This line declares a function named multiMap that takes three parameters: val (the initial value),
 n (the number of times to apply the callback function), and cb (the callback function to be applied to the value). */
function multiMap(val, n, cb) {
  /*This line initializes a variable named result with the initial value val. 
  This variable will hold the intermediate result as we apply the callback function multiple times.*/
  let result = val;
  /*This line starts a for loop that iterates n times. It initializes a variable i to 0, and the loop continues as long as i is less than n. After each iteration, i is incremented by 1.*/
  for (let i = 0; i < n; i++) {
    /*Inside the loop, this line applies the callback function cb to the current value of result. It replaces the current value of result with the value returned by the callback function.*/
    result = cb(result);
  }
  /*This line marks the end of the for loop and the multiMap function definition. It returns the final value of result after applying the callback function n times.*/
  return result;
}

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
  module.exports = multiMap;
} catch (e) {
  return null;
}
