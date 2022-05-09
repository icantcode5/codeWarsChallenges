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

//Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

function digital_root(n) {
    while(n >= 10){
       n = String(n).split('').map(Number).reduce((acc, cur)=> acc + cur,0) 
    }
    return n
}

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.
// arrayDiff([1,2],[1]) == [2]

function arrayDiff(a, b) {
    return a.filter(element => !b.includes(element)) //pass through only the elements that aren't included in the array of b
} 

//
   



