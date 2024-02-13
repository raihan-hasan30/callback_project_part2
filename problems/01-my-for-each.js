/*******************************************************************************
Write a function `myForEach` that accepts an array and a callback as arguments.
The function should call the callback on each element of the array, passing in the
element, index, and array itself. The function does not need to return any value.

Do not use the built in Array.forEach.

Examples:

myForEach(['a', 'b', 'c'], function (el, i) {
    console.log(el + ' is at index ' + i);
}); // prints
// a is at index 0
// b is at index 1
// c is at index 2

let test = [];
myForEach(['laika', 'belka'], function (el) {
    test.push(el.toUpperCase());
});
console.log(test); // ['LAIKA', 'BELKA']
*******************************************************************************/
// This line declares a function named myForEach which accepts two parameters: array (the array to be iterated over) and cb (the callback function to be called for each element of the array).
function myForEach(array, cb) {
  /*This line starts a for loop that iterates over the elements of the array. It initializes a variable i to 0, and the 
    loop continues as long as i is less than the length of the array. After each iteration, i is incremented by 1.*/
  for (let i = 0; i < array.length; i++) {
    /*Inside the loop, this line calls the callback function cb with three arguments:
      array[i]: The current element of the array being processed.
      i: The index of the current element.
      array: The entire array being iterated.*/
    cb(array[i], i, array);
  }
}

//Noah was here
/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
  module.exports = myForEach;
} catch (e) {
  return null;
}
