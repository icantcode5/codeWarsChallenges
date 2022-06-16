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

//Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

function bmi(weight, height) {
  let bmi = weight / (height*height)
  if(bmi <= 18.5){
    return 'Underweight'
  }else if(bmi <= 25){
    return "Normal"
  }else if(bmi <= 30){
    return 'Overweight'
  }else{
    return 'Obese'
  }
}

//A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?
//Return True if yes, False otherwise :)

function hero(bullets, dragons){
    return .5* bullets >= dragons
}

//I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.
// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
  let arr1Sum = arr1.reduce((sum,curr) => sum + curr,0) 
  let arr2Sum = arr2.reduce((sum,curr) => sum + curr,0) 
  return arr1Sum + arr2Sum
}

// ANOTHER, SHORTER MORE CONCISE SOLUTION

function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}

//Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!
// The function takes a name as its only argument, and returns one of the following strings:
// name + " plays banjo" 
// name + " does not play banjo"

function areYouPlayingBanjo(name) {
  if(name.split('')[0] === 'r'||name.split('')[0] === 'R' ){ //turn name into an a letter array and check the first letter in the first index for 'r' or 'R'
    return `${name} plays banjo`
  }else{
    return `${name} does not play banjo`
  }
}

//ANOTHER SOLUTION, SHORTER MORE SIMPLE (DUH!!)
function areYouPlayingBanjo(name) {
  return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo"; // check string index
}

//
// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').
// Create a function which translates a given DNA string into RNA.
// For example:
// "GCAT"  =>  "GCAU"

function DNAtoRNA(dna) {
  for(let i = 0; i<dna.length;i++){
    if(dna[i] === 'T'){
      dna = dna.replace('T','U')
    }
  }
  return dna
}

//ANOTHER SOLUTION

function DNAtoRNA(dna) {
  return dna.split("T").join("U"); //split the string into an array and break it at each instance of "T" and then join it after each element with the letter "T". CLEVER!
}

//if the number is even, multiply it by 8, else multiply it by 9

function simpleMultiplication(number) {
  if(number % 2 === 0){
    return number * 8
  }else{
    return number * 9
  } 
}

//ou were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true (1 in Prolog, NASM and COBOL) if it is possible and false (0 in Prolog, NASM and COBOL) if not. The input values are always positive.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return  mpg * fuelLeft >= distanceToPump ? true : false
 };

 //remove the highest and lowest numbers from the array and then sum the remaining values. If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

 function sumArray(array) { //UNIQUE SOLUTION USING A TRY AND CATCH BLOCK
  try{
  let newArr = array.sort((a,b)=> a-b)
  newArr.pop()
  newArr.shift()
  let arr =  newArr.reduce((a,b)=> a+b,0)
  return arr
    }
  catch(e){ //this lets all the code that fails (null,undefined,none,less than 2 elements in the array return 0)
    return 0
  } 
}

//Given an integer, add all the numbers starting from 1 up to that integer to an array

function monkeyCount(n) {
  let arr = []
  for(let i = 1; i<= n;i++){
  arr.push(i)
}
  return arr
}

//Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]
// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:
// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point

function points(games) {
  let score = 0
  let gamesTwo = games.join(':').split(':').map(Number) //join each element by ':' which looks like '3:1:2:2:0:1, then we split the string back into array this time at every ':' so the array will contain no more ':'s
  for(let i = 0;i<gamesTwo.length; i+=2 ){
    if(gamesTwo[i] > gamesTwo[i+1]){ // check in pairs to determine the score update. This works bc there's an even amount of numbers
      score+=3
    }else if(gamesTwo[i] < gamesTwo[i+1]){
      score+=0
    }else{
      score+=1
    }
  }
  return score
}

//It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?
// 
// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.
// 
// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.
// 
// Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell and Lua) or "¥" (Rust).

function bonusTime(salary, bonus) {
  return bonus ? '£' + salary *10 : '£' + salary // if bouns is boolean true, multiply salary times 10 else return salary
}

//return a string as an array

function stringToArray(string){
  return string.split(' ');
}

//If you can't sleep, just count sheep!!
// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num){
  let str = ''
 for(let i = 1;i<=num;i++){
   str += `${i} sheep...`
 }
  return str
}

//Create a function with two arguments that will return an array of the first (n) multiples of (x).

// Assume both the given number and the number of times to count will be positive numbers greater than 0.
// Return the results as an array (or list in Python, Haskell or Elixir).
// Examples:
// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

function countBy(x, n) {
  let arr = []
  let num = x*n
  for(let i = x;i<=num;i+=x){ //start the loop at the mutiple, go up to the length x*n which is the array.length and finally increment by the given multiple of x
    arr.push(i)
  }
  return arr
}

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

function sumMix(x){
  return x.map(Number).reduce((a,b)=> a + b,0)
}

//ALSO ANOTHER SOLUTION THAT IS FASTER :
function sumMix(x){
  return x.reduce((a,b) => a + +b , 0)
}

//Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.

function isDivideBy(number, a, b) {
  if(number % a  === 0 && number % b === 0){
    return true
  }else{
    return false
  }
}

//You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

const areaOrPerimeter = function(l , w) {
  return l === w ? l*w : l + l + w + w
}


