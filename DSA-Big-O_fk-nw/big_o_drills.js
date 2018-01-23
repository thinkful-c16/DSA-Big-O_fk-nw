'use strict';


// ===== EVEN or ODD ===== //
//O(1) Constant Time because it has two constant operations

function isEven(value){
  if (value % 2 == 0){
    return true;
  }
  else
    return false;
}

// ===== ARE YOU HERE? ===== //
//- checks parameter data sets to see if there is value in both data sets
// O(n^2) Polynomial Time; 2 nested loops

function areYouHere(arr1, arr2) {
  for (let i=0; i<arr1.length; i++) {
      const el1 = arr1[i];
      for (let j=0; j<arr2.length; j++) {
          const el2 = arr2[j];
          if (el1 === el2) return true;
      }
  }
  return false;


  // ===== DOUBLER ===== //
  // O(n) Linear

  function doubleArrayValues(array) {
    for (let i=0; i<array.length; i++) {
        array[i] *= 2;
    }
    return array;
}


// ===== NAIVE SEARCH ===== //
// O(n) Linear

function naiveSearch(array, item) {
  for (let i=0; i<array.length; i++) {
      if (array[i] === item) {
          return i;
      }
  }
}

// ===== CREATING PAIRS ===== //
// O(n^2) Polynomial Time; 2 nested loops

function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
      for(let j = i+1; j < arr.length; j++) {
          console.log(arr[i] + ", " +  arr[j] );
      }
  }
}

// ===== COMPUTING FIBONACCIS ===== //
// O(n) Linear

function generateFib(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {

    // we're adding the first item
    // to the result list, append the
    // number 0 to results
    if (i === 1) {
      result.push(0);
    }
    // ...and if it's the second item
    // append 1
    else if (i == 2) {
      result.push(1);
    }

    // otherwise, sum the two previous result items, and append that value to results.
    else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  // once the for loop finishes
  // we return `result`.
  return result;
}