// 6 KYU PROBLEMS AND SOLUTIONS!!!

// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
    let count = 0
    for(let i = 0; i < A.length; i++){ //for loop to loop through the given array
      for(let k = 0; k < A.length; k++){ // second for loop to check each element of the first array against itself
        if(A[i] === A[k]){ 
          count++ //count each time the element repeats itself in its own array
          }
        }
      if(count % 2 !== 0){ //at the first instance of an element occuring odd times, return that element since its the only element occuring odd times 
      return A[i]
      }
    }
  }

