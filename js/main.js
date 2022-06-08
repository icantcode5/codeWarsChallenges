// 8 KYU

//Get the mean of an array

function getAverage(marks){
    let results = marks.reduce((a,b)=> a+b,0)/marks.length
    return Math.floor(results)
  }

  //Reverse Sequence

  const reverseSeq = n => {
    let arr = []
    for(let i= 1; i <= n; i++){
      arr.unshift(i)
    }
      return arr
    
  };

  //Jenny's Secret Message

  function greet(name){
    if(name === "Johnny"){
      return "Hello, my love!";
    }
    return "Hello, " + name + "!";
  }

  //Calculate avg of array

  function find_average(array) {
    if(array.length === 0){
      return 0}
   return array.reduce((sum,c) =>sum + c, 0 )/array.length
       
  }

  //Reverse Words

  function reverseWords(str){
    return str.split(' ').reverse().join(' ')
  }

  //Count of postives, Sum of negatives

  function countPositivesSumNegatives(input) {
    let arr = []
   if(input === null || input.length === 0){
         return []
   }
     let newArr = input.filter(item => item > 0).length
     let newArrr = input.filter(item => item < 0).reduce((sum,c)=> sum + c,0)
      arr.push(newArr,newArrr)
     return arr
    
 }

 //Beginner series #2 clock

 function past(h, m, s){
    let sum = h*3600000 + m*60000 + s*1000 
       return sum
     
   }

   //Invert values

   function invert(array) {
    return array.map(item => item*-1)
 }

 //Needle in Haystack

 function findNeedle(haystack) {
    let results = haystack.indexOf('needle')
    return ( `found the needle at position ${results}`)
  }

  //Convert number to reversed array of digits

  function digitize(n) {
    let results = n + ''
    results = results.split('').reverse().map( item => Number(item))
    return results
    
  }

  //Given a starting number and end number, return the multiples of the starting number up to and including the end number

  function findMultiples(integer, limit) {
    let arr = [];
    for (let i = integer; i <= limit; i++) {
        if (i % integer === 0) {
            arr.push(i);
        }
    } 
    return arr;
}

//Given a string of numbers, if the number is greater than or equal to five, replace the number with 1 and if the number is less than 5, replace the number with 0

function fakeBin(x){
  let str = ''
  for(let i = 0; i < x.length;i++){
    if(x[i] >= '5'){
      return str += 1
    }else{
      return str += 0
    }
  }
  return str
}

//If the given integer requires you to plural any word that comes after it (for example : 5 minutes) return true, otherwise return false

function plural(n) {
  return ( n > 1 || n < 1) ? true : false
}

//Your task is to sum the differences between consecutive pairs in the array in descending order.
// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]
// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

function sumOfDifferences(arr) {
  let newArr = []
  let sorted = arr.sort((a,b) => b - a) //sort array in descending order and store in a new variable
  for(let i = 0;i < sorted.length-1;i++){ //loop through sorted array
    newArr.push(sorted[i] - sorted[i+1] ) // beacause we are always looking at the index + 1, our loop has to stop at sorted.length-1 since if we check the end of the array + 1, there is no value there
  }
  return newArr.reduce((cur,sum) => cur + sum,0) // sum the differences

}

// ANOTHER SOLUTION, SIMPLER

function sumOfDifferences(arr) {
  return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0; // the difference of the lowest and greatest integer is the same as the difference of all the adjacent values and their sums
}

//Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

function between(a, b) {
  let arr = []
  for(let i = a; i <= b; i++){ // a is the starting point and b is the end point. Simple loop that includes b 
    arr.push(i) // push values looped through into empty array
  }
  return arr //return the filled array
}

//Return booleans as a string type

function booleanToString(b){
  if(b === true){
    return 'true'
  }else{
    return 'false'
  }
}

//Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
//Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

function paperwork(n, m) {
  if(n < 0|| m < 0){
    return 0
  }else{
    return n*m
  }
}

//Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2){
  if(flower1 % 2 === 0 && flower2 % 2 !==0){
    return true
  }else if(flower1 % 2 !== 0 && flower2 % 2 ===0){
    return true
  }else{
    return false
  }
}

//