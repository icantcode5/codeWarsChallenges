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

//If the paramter name is the same as the parameter boss, return "Hello boss" if not, "Hello guest"

function greet (name, owner) {
  return name === owner ? "Hello boss" : "Hello guest"
}

//Your task is to find the first element of an array that is not consecutive.
// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.
// If the whole array is consecutive then return null2.
// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

function firstNonConsecutive (arr) {
  for(let i = 0; i<arr.length-1;i++){ //loop through EXCEPT END IS (i < arr.length -1 ) -1 because we don't want to reach out of the end of the array since we're looking at the current index and next one in one iteration!!!!!!!!!
    if(arr[i] - arr[i+1] !== -1){ //subtract current index with next index and if it is consecutively ascending it should return -1!
      return arr[i+1]
    }
  }
  return null
}

//After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
// Write a code that gives out the total amount for different days(d).

function rentalCarCost(d) {
  let dayCost = d * 40 //find the cost of x days 
  if(d >= 3 && d < 7){ 
    return dayCost - 20 // apply discount of 20 off for 3 or more days of rental but less than 7!!!!
  }else if(d >= 7){
    return dayCost - 50 //apply discount of 50 off for renting for 7 or more days
  }else {
    return dayCost //less than 3 days of rental? then no discount code is needed
  }
}

//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  return s.split('').filter(el => el !== '!').join('') //filters out any elements that are '!'
}

//Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

function getGrade (s1, s2, s3) {
  let avg = (s1 + s2 + s3)/ 3
  if(avg >=90 && avg <=100){
    return 'A'
  }else if(avg >=80 && avg <90){
    return 'B'
  }else if(avg >=70 && avg <80){
    return 'C'
  }else if(avg >=60 && avg <70){
    return 'D'
  }else if(avg >=0 && avg <60){
    return 'F'
  }
}

//ANOTHER SOLUTION USING CASE STATEMENT WHICH IS BETTER WHEN DEALING WITH MULTIPLE CONDITIONAL STATEMENTS

function getGrade (s1, s2, s3) { 
  var avg = (s1 + s2 + s3)/3;
  switch(true) { //how does switch work here? We are looking for one of the case condition results to be true :) Like, we have 87 as avg, so case (avg >= 90) gives you false.. next gives you true, so it will be used.
    case (avg >= 90):
      return 'A';
    case ( avg >= 80):
      return 'B';
    case ( avg >= 70):
      return 'C';
    case ( avg >= 60):
      return 'D'; 
    default:
      return 'F';   
  }
 }

 //All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
 // Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

 function feast(beast, dish) {
  if(beast[0] === dish[0] && beast[beast.length-1] === dish[dish.length-1]){ //check first letter and last letter and compare to dish
    return true
  }else{
    return false
  }
}

//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str) {
  let stri = []
  for(let i = 0 ; i < str.length;i++){
    stri.push(str[i])
    stri.push(str[i])
  }
  return stri.join('')
}

//ANOTHER SOLUTION WHICH IS SHORTER USING ES6 NOTATION

const doubleChar = (str) => str.split("").map(c => c + c).join(""); //split the string into an array and then map each element to add itself to it. In this case, each string element will add itself and then we join the array elements resulting in a string

//Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

function removeEveryOther(arr){ //Can also use a filter method to only pass the indices where i % 2 === 0
  let removeElements = []
  for(let i = 0; i<arr.length;i+=2){ //starting from the first index, ever other element is kept
    removeElements.push(arr[i])
  }
  return removeElements
}

//The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

function cockroachSpeed(s) {
  return Math.floor(s*27.7778)
}

//Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.
// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. 

function setAlarm(employed, vacation){
  return employed === true && vacation === false  //returns true implicitly if both conditions are met, else it's implicitly false
}

//You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
// For example, when the input is green, output should be yellow.

function updateLight(current) {
  switch(current){
    case 'green':
      return 'yellow'
      break
    case 'yellow':
      return 'red'
      break
    case 'red':
      return 'green'
      break
  }
}

//Task Overview:
// You have to write a function that accepts three parameters:
// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

function enough(cap, on, wait) {
  if(cap === on){
    return wait
  }else if(on + wait > cap){
    return Math.abs(cap - on - wait)
  }else{
    return 0
  }
}

//Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

const quarterOf = (month) => {
  if(month <=3){
    return  1
  }else if(month <= 6){
    return 2
  }else if(month <=9){
   return 3 
  }else{
    return 4
  }
}

//Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.
// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:
// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1

function warnTheSheep(queue) {
  let postion = queue.reverse().indexOf('wolf') //when reversed, the position of the index of wolf is the same place where the sheep infront's postion is originally
  return postion === 0 ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${postion}! You are about to be eaten by a wolf!`
}  //HATED THIS ONE BTW, WHEN USING TICKS USE VARIABLES INSTEAD OF CODING LOGIC


//You are given two interior angles (in degrees) of a triangle.
//Write a function to return the 3rd.

function otherAngle(a, b) {
  return 180-(a+b); //interior angles all add up to 180 degrees!
}

//Given a number n, return the number of positive odd numbers below n, EASY!

function oddCount(n){
  return Math.floor(n/2)
}

//Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.
// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.
// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:
// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

function correct(s){
  s = s.split(''); //IF WE TRY TO LOOP THROUGH THE STRING AND CHANGE EACH LETTER, IT WON'T WORK. WE HAVE TO SPLIT IT INTO AN ARRAY AND THEN LOOP THROUGH EACH ELEMENT AND CHANGE IT THAT WAY!!!
  for (var i = 0; i < s.length; i++) {
    if (s[i] === '5'){
      s[i] = 'S';
    } 
    else if (s[i] === '0') s[i] = 'O';
    else if (s[i] === '1') s[i] = 'I';
    }
  return s.join('')
}

//Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)
// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".

function hoopCount (n) {
  return n >= 10 ?  'Great, now move on to tricks' : "Keep at it until you get it" // if 10 or more, say this, otherwise say this
}

//Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.
//There will only be one 'longest' word.

function findLongest(str) {
  
  var spl = str.split(" ");
  var longest = 0
  
  for (var i = 0; i < spl.length; i++) {
    if (spl[i].length > longest) {
      longest = spl[i].length
    
    }
}
    return longest
}

//




