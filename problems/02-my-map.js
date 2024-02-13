/*******************************************************************************
Write a function `myMap` that accepts an array and a callback as arguments.
The function return an array of new elements obtained by calling the callback on
each element of the array, passing in the element.

Do not use the built in Array.map

// Examples

let result1 = myMap([100, 25, 81, 64], Math.sqrt);
console.log(result1);   // [ 10, 5, 9, 8 ]

let result2 = myMap(['run', 'Forrest'], function (el) {
    return el.toUpperCase() + '!';
});
console.log(result2);   // [ 'RUN!', 'FORREST!' ]
*******************************************************************************/
/*This Line declares a function named 'myMap' that takes two parameters: 'array' (the array to be mapped) and 'cb'
(the callback function to be called for each element of the array)*/
function myMap(array, cb) {
  /*This line initializes an empty array named 'result' where we'll store the results of applying the 
    callback function to each element of the input array*/
  let result = [];
  /*This line starts a for loop that iterates over the elements of the input array. 
  It initializes a variable i to 0, and the loop continues as long as i is less than the length of the array. After each iteration, i is incremented by 1.*/
  for (let i = 0; i < array.length; i++) {
    /*Inside the loop, this line calls the callback function cb with the current element of the input array (array[i]). 
    It pushes the result of applying the callback function to the current element into the result array.*/
    result.push(cb(array[i]));
  }
  /*This line marks the end of the for loop and the myMap function definition. 
  It returns the result array, which contains the mapped elements obtained by applying the callback function to each element of the input array.*/
  return result;
}

let result1 = myMap([100, 25, 81, 64], Math.sqrt);
console.log(result1); // [ 10, 5, 9, 8 ]

let result2 = myMap(["run", "Forrest"], function (el) {
  return el.toUpperCase() + "!";
});
console.log(result2); // [ 'RUN!', 'FORREST!' ]

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
  module.exports = myMap;
} catch (e) {
  return null;
}
