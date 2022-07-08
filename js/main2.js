// 7 KYU Solutions

//Highest and Lowest 

function highAndLow(numbers){
    let arAr = []
    let arr =  numbers.split(' ')
    let high = Math.max(...arr)
    let low = Math.min(...arr)
    arAr.push(high,low)
return arAr.join(' ')
}

//Disemvowels Trolls

function disemvowel(str) {
    let newStr = str
    let vowels = ['a','e','i','o','u','A','E','I','O','U']
    for(char of newStr){
        if(vowels.includes(char)){
        newStr = newStr.replace(char,'')
        }
      
    }
    return newStr
}

//Square every digit

function squareDigits(num){
    let results = num.toString().split('') 
    let newResults =  results.map((element) =>{
      let newResults = Number(element) 
      return element*element 
    }).join('') 
    return Number(newResults) 
}

//Vowel Count

function getCount(str) {
    var vowelsCount = 0;
    let vowels = ['a','e','i','o','u']
    for(let char of str){
      if(vowels.includes(char)){
        vowelsCount++
      }
    }
    return vowelsCount
}

//Descending Order - Take in a greater integer and return it in descending order

function descendingOrder(n){
  
    let m = n.toString()
    let mm = Number(Array.from(m, element => Number(element)).sort((a,b)=> b-a).join(''))
    return mm  
}

//Mumbling - take in a string and return it differently

//Get the Middle Character from given string

function getMiddle(s){
    if(s.length % 2 === 0){ 
        return s[s.length/2 -1 ] + s[s.length/2]
  
    }else if(s.length % 2 !== 0){
        return s[Math.floor(s.length / 2) ] 
  }
}

//If the given integer is a perfect square, return true, otherwise return false

var isSquare = function(n){
    return Math.sqrt(n) % 1 === 0 //returns true if the remainder is the same as 0. Only integers
  }

//Return true if the string has no repeating words(is an isogram), false otherwise

function isIsogram(str){
    return new Set(str.toUpperCase()).size === str.length;
}

//Given an array of mixed value types, return an array with only value types of numbers

function filter_list(l) {
    return l.filter( element => typeof element === 'number' )
}

//If the given string has the same number of 'x's and 'o's, return true.Case insensitive

function XO(str) {
    let countX = 0
    let countO = 0
    for(let char of str.toLowerCase()){
      if(char === 'x'){
        countX++
      }else if(char ==='o'){
        countO++
        }
    }
  return countX === countO
}
//also can be coded in a simpler way >>>>>
function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}

//Given a string, return the length of the smallest string

function findShort(s){
  return Math.min(...s.split(' ').map(element => element.length))  
}

//Given a long string, return the first letter of each word capitalized

String.prototype.toJadenCase = function () {
    return this.split(' ').map(element => element[0].toUpperCase() + element.substring(1)).join(' ') 
  };

  //Given a DNA strain, pair the complements of each Character

function DNAStrand(dna){
    let code = {
      'A': 'T',
      'T': 'A',
      'C': 'G',
      'G': 'C'
}
    return dna.split('').map(function(i) { return code[i] }).join('')
}
 
//Return the last 4 numbers of a credit card while all other numbers are masked by '#'s

function maskify(cc) {
    return cc.slice(-4).padStart(cc.length,'#')
}

//return the sum of the two smallest integers of the given array
function sumTwoSmallestNumbers(numbers) {  
    numbers.sort( (a, b) => a-b)
    return numbers[0] + numbers[1]
}

//Find the sum of the range of numbers while only being given the low and high

const GetSum = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
}

//Return the amount of times needed for population growth to pass population given

function nbYear(p0, percent, aug, p) {
  let i = 0
  while(p0 < p){
    p0 = Math.floor(p0 + p0 *(percent/100) + aug)
    i++
  }
return i
  
}

//Given a perfect square integer, find the next one

function findNextSquare(sq) {
  let square;
  if(Math.sqrt(sq) % 1 !== 0){
    return -1
  }else{
    square = Math.sqrt(sq) + 1
  }
  return square * square
}

//Return the given array with only the words that contain 4 letters in them

function friend(friends){
  return friends.filter(element => element.length=== 4)
}

//Return 'Senior' if over 55 and 7, otherwise return 'Open' (pairs in an array)

function openOrSenior(data){
  return data.map(element => {
    if(element[0] >= 55 && element[1] > 7){
      return 'Senior'
    }else{
      return 'Open'
    }

  })
} //input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
  // output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

  //Return the number of characters greater than 'm' in a fraction out of the total number of characters in the given string

function printerError(s) {
    let count = 0
      let arr = 'abcdefghijklm'
      for(let char1 of arr){
      for(let char of s){
        if(char === char1 ){
          count--
        }
      }
    }
     return (count + s.length) +'/' + s.length
     
}

//Return the sum of two numbers in their binary form

function addBinary(a,b) {
  let num = a+b
  return num.toString(2)
}

//if the given 3 side lengths can be used to create a triangle, return true

function isTriangle(a,b,c){
  return a+b> c && a+c >b && c+b > a ? true : false
}

//Return the sum of the numbers in the nth row of an odd consecutive triangle

function rowSumOddNumbers(n) {
  return Math.pow(n, 3); // n*n*n returns specific odd row triangle sum
}

//Convert the given array of a binary number to decimal

const binaryArrayToNumber = arr => {
  return parseInt(arr.join(''),2) // first parameter turns string into a number and second parameter decides the base
};

//Given an array with pairs where the first number is the amount of people that get onto the bus and the second number is the amount of people that get off the bus, find how many people are left in the bus after the last stop

var number = function(busStops){
  let num =  busStops.map( el => el[0]).reduce((sum,c)=> sum+c,0) 
  let num2 = busStops.map(ele => ele[1]).reduce((sum,c)=> sum+c,0)
  return num - num2
 }
 number([[10,0],[3,5],[5,8]]),5)

 //Check to see the given integers divisors and if the intger is prime, return that the integer is prime

 function divisors(integer) {
  let arr = []
  for(let i = 2; i < integer;i++){
    if(integer % i === 0){
      arr.push(i)
    }
  }
   return arr.length >= 2 ? arr : `${integer} is prime`
}

//If the sum of the given array's integers are even or odd, return 'even' or 'odd'

function divisors(integer) {
  let arr = []
  for(let i = 2; i < integer;i++){
    if(integer % i === 0){
      arr.push(i)
  }

}
   return arr.length >= 2 ? arr : `${integer} is prime`
}

//Given a string of words, return the string with each word reversed

function reverseWords(str) {
  return str.split(' ').map( el => el.split('').reverse().join('')).join(' ')
}

//Return true if the number given,its digits when raised to the power of the number's length and summed equal the original number

function isNarcissistic(n){
  let N = n.toString().length
  let num = n.toString().split('').map(element => Math.pow(element,N)).reduce((cur,sum)=> cur + sum,0)
  return num === n ? true : false
  }

  //Given a string, return the count of all the capital letters, lowercase letters, numbers and symbols in that order in an array

  const solve = (s) => {
    let result = [0, 0, 0, 0];
    for (let i = 0; i < s.length; i += 1) {
      if (s[i].toLowerCase() > s[i]) {
        result[0] += 1;
      } else if (s[i].toUpperCase() < s[i]) {
        result[1] += 1;
      } else if (s[i] >= 0 && s[i] <= 9) {
        result[2] += 1;
      } else {
        result[3] += 1;
      }
    }
    return result;
  };

  //Given a string of binary numbers, if any of the chosen adjacent numbers are '0' and '1' remove them and return the amount of elements left in the string

function zeroAndOne(s) {
    let arr = Array.from(s)
    arr.forEach((element,i)=> {
      if((arr[i]==='0' && arr[i+1]==='1')||arr[i]==='1' && arr[i+1]==='0' ){
         arr[i] ='', arr[i+1]=''
    }
  })
    return arr.join('').length
}

//If the given number has multiples of 3 and 5, add those numbers up an return their sum

function solution(number){
  let arr = []
 for(let i = 1; i < number; i++){
   if(i % 3 === 0){
     arr.push(i)
   }else if(i % 5 === 0){
     arr.push(i)
   }
 }
 return arr.reduce((sum,cur)=> sum+cur,0)
}

//Find the minimum number in an array and return the array without it. If there are repeating min numbers, get rid of the first instance of it only. Do not mutate the original array!

function removeSmallest(numbers) {
  let min = Math.min(...numbers)
  return numbers.filter((element, i ) => i !== numbers.indexOf(min))
}

//Return the minimum and maximum of an array in an array format

function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)];
}

//Write a function which takes a list of strings and returns each line prepended by the correct number.

//EX: number([]) // => []
//number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]

var number=function(array){
  return array.map((element, i) => `${i+1}: ${element}`)
}

//Given a low and high number, return only the numbers that don't contan a '5' in them in an array

function dontGiveMeFive(start, end){
  let arr = []
  for(let i = start; i <= end; i++){
    arr.push(i.toString())
  } 
  let newArr = arr.map(element => element.includes('5')).filter(element => element !== true)
  return newArr.length
}

//Given an array of numbers, if a number has a perfect square root, return the sqrt otherwise square the number

function squareOrSquareRoot(array) {
  return array.map((element) => {
    if(Math.sqrt(element) % 1 === 0){
      return Math.sqrt(element)
      }else{
        return Math.pow(element,2)
      }
  })
}

//Return 1 for both lower case strings, -1 for lowercase and uppercase or vice versa strings and 0 for anything else

function sameCase(a, b){
  if(a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()){
     return -1
   }else if(a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()){
       return 1
   }else{
     return 0
   }
 }

 //Given an array of numbers, return the only non repeating number

 function stray(numbers) {
  for(let i = 0; i < numbers.length; i++){
    if(numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){
       return numbers[i]
       }
  }
   
}

//Given the inital principle of money, how many years will it take to reach the desired amount after being left in the bank? 

function calculateYears(principal, interest, tax, desired) {
  let i = 0
  while (principal < desired){
    principal = principal + (principal*interest) - (principal*interest) * tax
    i++
  }
  return i
}

//Square every number from 0 to the given integer n and find how many instances of the integer d appear in each squared number

function nbDig(n, d) {
  let arr = []
    for(let i = 0; i <= n; i++){
     arr.push(Math.pow(i,2))
  }
  return arr.join('').split(d).length-1
}

//Find how many divisors there are in the given parameter of n

function getDivisorsCnt(n){
  let count = 0
    for(let i = 1; i <= n; i++){
      if(n % i === 0){
        count++
      }
    }
  return count
}

//given an integer, return the value of nearest multiple of 5

function roundToNext5(n){
  return Math.ceil(n/5)*5;
}

//Given an array of 3 elements containing only integers, return the integer whose value is the middle of the other two, but don't mutate the original array

function gimme (triplet) {
  let arr = triplet.slice().sort((a,b)=> a-b)
  return triplet.indexOf(arr[1])
}

//Given an array of different string lengths, sort the array by string length from lowest to greatest

function gimme (triplet) {
  let arr = triplet.slice().sort((a,b)=> a-b)
  return triplet.indexOf(arr[1])
}

//given 3 integers, begin, end, step; return all the integers between begin and end stepping up by the step integer

const sequenceSum = (begin, end, step) => {
  let sum = 0
  for(let i = begin; i <= end ; i += step){
    sum += i
  }
  return sum
};

//Given an array of numbers, return the two greates values in an array format

function twoOldestAges(ages){
  let arr = ages.sort((a,b) => a - b)
  return [arr[arr.length-2], arr[arr.length-1]]
}

//Given an object of a fighter, create a function that declares a winner based on turn fighting where the fighter is dead if their health reaches 0 or less

function Fighter(name, health, damagePerAttack) {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.toString = function() { return this.name; }
}

function declareWinner(fighter1, fighter2, firstAttacker) { //SOLUTION FUNCTION
  while (fighter1.health > 0 && fighter2.health > 0) {
    fighter2.health -= fighter1.damagePerAttack;
    fighter1.health -= fighter2.damagePerAttack;
  }
  
  if (fighter1.health <= 0 && fighter2.health <= 0)
    return firstAttacker;
  else if (fighter1.health <= 0)
    return fighter2.name;
  else
    return fighter1.name;
}

//Given a number, write a function that adds all the numbers that 3 and 5 evenly divide into said passed through number

function findSum(n) {
  let sum = 0
  for(let i = 1; i <= n; i++){
    if((i % 3 === 0) || (i % 5 === 0)){
      sum += i
    }
  }
  return sum
}

//Given a divisor value and the end point value, return the biggest value that the divisor goes into evenly that is less than or equal to the end point

function maxMultiple(divisor, bound){
  let arr = []
  for(let i = 1; i <= bound; i++){
    if(i % divisor === 0){
      arr.push(i)
    }
  }
  return arr[arr.length-1]
}

//Given a sequence of numbers in a string, return the greatest sequence of 5 consecutive numbers

function solution(digits){
  let arr = []
  for(let i = 0; i <= digits.length;i++){
    arr.push(digits.slice(i,i+5))
  }
  return Number(arr.sort((a,b)=> a - b )[arr.length-1])
}

//Given two different strings, check if they anagrams, meaning, contain the same letters and same length of string, just in a different order

var isAnagram = function(test, original) {
  let str1 = test.toUpperCase().split('').sort().join('')
  let str2 = original.toUpperCase().split('').sort().join('')
  
  return str1 === str2
};

//Given two arrays, if the second arrays element matche the firt one, add 4 to the score, if the elements don't match, subtract 1, and if the element in the second array is blank, add 0 points to the score

function checkExam(array1, array2) {
  let score = 0
  for(let i = 0; i < array1.length;i++){
    if(array2[i] === ""){
      score += 0
    }else if(array1[i] === array2[i]){
      score += 4
    }else{
      score -= 1
    }  
  }
  return score < 0 ? 0 : score
}

//Given a number as a parameter, return the absolute value of the sum of its digits 

function sumDigits(number) {
  return (Math.abs(number) + '').split('').reduce((acc,curr)=> acc + +curr,0)
}

//Given a single string as the argument, return in an array, the indices of where each character is capitalized at

var capitals = function (word) {
  let arrr =[]
	Array.from(word, element => {
    if(element === element.toUpperCase()){
     arrr.push(word.indexOf(element))
    }
  })
  return arrr
};

//Given an array of numbers as the argument, and a limit value, check if the limit value is greater than or equal to all the values in the array and return true if true, else return false

function smallEnough(a, limit){
  return Math.max(...a) > limit ? false : true
 }

 //Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

 function minValue(values){
  return Number(values.filter((element, i)=> i === values.indexOf(element)).sort((a,b)=> a-b).join(''))
}

//Complete the function/method so that it returns the url with anything after the anchor (#) removed.

function removeUrlAnchor(url){
  if(url.includes('#')){
  return url.slice(url, url.indexOf('#'))
  }else{
    return url
  }
}

//Given a string with uppercase and lowercase letters, return the string in all lowercase letters if the string has more lowercase than uppercase letters and vice versa. If the uppercase letters = the amount of lowecase letters, return the string in all lowercase letters

function solve(s){
  let count = 0
  let count2 = 0
  Array.from(s).map(element => {
    if(element === element.toLowerCase()){
      count++
    }else if(element === element.toUpperCase()){
      count2++
    }
  })
  if(count > count2 || count === count2){
    return s.toLowerCase()
}else if(count < count2){
  return s.toUpperCase()
  }
}

//Given an array of numbers, check if the numbers are in ascending order. If they are, return true else return false

function inAscOrder(arr) {
  for(let i = 0 ; i < arr.length; i++){
     if(arr[i] > arr[i+1]){
       return false
    }
  }
  return true
}

// //You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

function mxdiflg(a1, a2) {
  if(a1.length === 0  || a2.length === 0){
    return -1
    }else{
    a1.sort((a,b)=> a.length - b.length)
    a2.sort((a,b) => a.length - b.length)
    let max1 =  Math.abs(a1[0].length - a2[a2.length-1].length)
    let max2 = Math.abs(a2[0].length - a1[a1.length-1].length)
    return max1 > max2 ? max1 : max2
  }
}

//Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

//For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

function capitalize(s){
  let arr =  s.split('').map((element,i) => {
    if(i % 2 === 0){
      return element = element.toUpperCase()
    }else{
      return element
    }
  })
  let arr3 =  s.split('').map((element,i) => {
    if(i % 2 !== 0){
      return element = element.toUpperCase()
    }else{
      return element
    }
  })
  return [arr.join(''),arr3.join('')]
}

// //Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example: 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:'alpha beta gamma delta'

function removeDuplicateWords (s) {
  return s.split(' ').filter((element,i,arr) => i === arr.indexOf(element)).join(' ')
}

// ALSO ANOTHER SOLUTION

function removeDuplicateWords (s) {
  let set = new Set(s.split(' ')) //creates an object of only unique elements
  return Array.from(set).join(' ') //returns an array of those unique elements then we convert it back to a string
}

// Your mission: Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  if(enteredCode === correctCode && new Date(expirationDate) >= new Date(currentDate) ){
    return true
  }else{
    return false
  }
} // new Date(date) returns a formatted integer value of the paramater passed through it


//Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the SUM of the minimum values in each row.

// For Example:

// [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
// , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
// , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// ]

function sumOfMinimums(arr) {
  let myarr = []
     for(let i = 0; i < arr.length; i++){ //loop through the array and grab each element(array)
       myarr.push(Math.min(...arr[i])) //calculate the minimum value of each array and push it into an array
     }
    return myarr.reduce((acc,sum) => acc + sum,0) //sum the array of only minimum numbers of the past arrays
  }
  //ALSO ANOTHER SOLUTION

  function sumOfMinimums(arr) {
    return arr.reduce((acc, cur) => acc + Math.min(...cur),0)
}

//Given an array, all even indexed numbers are to be summed and all odd indexed numbers are to be summed and return these values in an array

function rowWeights(array){
    let weight1 = 0
    let weight2 = 0
    array.map((element,i) => {
      if(i % 2 === 0){
       weight1 += element
      }else{
        weight2 += element
      }
    })
    return [weight1,weight2]
}

//Given a 2 dimensional array, flatten in by returning 1 array containing the all the other array's elements sorted from least to greatest

function flattenAndSort(array) {
    return array.reduce((acc,cur) => acc.concat(cur),[]).sort((a,b) => a-b)
}

//ALSO ANOTHER SOLUTION

function flattenAndSort(array) {
    return [].concat(...array).sort((a,b)=> a-b)
}

//Write a factorial function

function factorial(n){
    let factor = 1
    for(let i = n; 0 < i; i--){
    factor = factor * i
    }
    return factor
}

//write the equation for finding the sum of the inner angles of an n sided polygon

function angle(n) {
    return (n-2) * 180
}

//Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(array) {
  let ascend = array.slice().sort((a,b)=> a-b).join('')
  let descend = array.slice().sort((a,b)=> b-a).join('')
  if(array.join('')=== ascend){
    return 'yes, ascending'
  }else if(array.join('')===descend){
    return 'yes, descending'
  }else{
    return 'no'
  }
}  

//Given a string and the number of times to repeat it, return the string repeated x times

function repeater(string, n){
  let repeat = ''
  for(let i = 0; i < n;i++){
    repeat += string
  }
  return repeat
}

//ALSO ANOTHER SOLUTION 

function repeater(string, n){
  return string.repeat(n)
}

//If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice stronger than love :-)

// The input will always be in lowercase and never be empty.

function wordsToMarks(string){
  let s = 0
  for(let i =0 ; i < string.length;i++){
    s += string.charCodeAt(i) -96
  }
 return s
}

//ALSO ANOTHER SOLUTION

function wordsToMarks(string){
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let marks = 0;
  string.split('').forEach((char) => {
    marks += alphabet.indexOf(char) + 1;
  });
  return marks;
}

//Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

// Examples
//  123 ->  321
// -456 -> -654
// 1000 ->    1

function reverseNumber(n) {
  let arr = String(n).split('').reverse()
  if(arr.includes('-')){
    arr.pop()
    arr.unshift('-')
  }
   return +arr.join('')                   
}

//Your task is to return the number of JavaScript developers coming from Europe.
// For example, given the following list:

// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
//   { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
//   { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
//   { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
// ];

function countDevelopers(list) {
  let count = 0
  for(let i = 0; i < list.length; i++){
    if(list[i].continent === 'Europe' && list[i].language === 'JavaScript'){
      count++
    }
  }
 return count
}

//In honor of my grandfather's memory we will write a function using his formula!
// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  let arr = [age1,age2,age3,age4,age5,age6,age7,age8]
  return Math.floor(Math.sqrt(arr.map(element => element * element).reduce((acc,cur)=> acc+cur,0))/2)
}

//Given a string str, reverse it omitting all non-alphabetic characters.

function reverseLetter(str) {
  let arr = []
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  for(let i = 0; i < str.length;i++){
      if(alphabet.includes(str[i])){ //alphabet doesn't include numbers or symbols so they're going to be left out of the new array
        arr.push(str[i])
      }
  }
  return arr.reverse().join('')
}

//use the filter method to return only even numbers from an array

function getEvenNumbers(numbersArray){
  return numbersArray.filter(element => element % 2 === 0 )
}

//You need to return the nth triangular number. You should return 0 for out of range values:

function triangular(n) {
  if(n < 0){
    return 0
  }
let val =  n* (n+1) / 2 //this is the most efficient way of doing this kata bc it handles large intergers
return val
}

//Find the number with the most digits.
// If two numbers in the argument array have the same number of digits, return the first one in the array.



function findLongest(array){
  let num = '0';
  for(let i=0; i<array.length; i++) {
    let string = array[i].toString();
    if(string.length > num.length) { //if the length of the array element is greater than the num.length value of 1...
      num = string; //then num now becomes the array element and moves on to the next element to compare it to the previous element being held in the variable num
    }
  }
  return parseInt(num); //return the array element that first appears with the most digits
}

//Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number.

function sumTriangularNumbers(n) {
  if(n < 0){
    return 0
  }
  let sum = (n*(n + 1)*(n+2)) / 6
  return sum
}

//return the largest sum of two pairs given an array of numbers

function largestPairSum (numbers) {
  let arr =  numbers.sort((a,b) => a-b)
  return arr[arr.length-2] + arr[arr.length-1] 
}

//Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

function adjacentElementsProduct(array) {
  let arr = []
  for(let i = 0 ; i<array.length-1;i++){
    arr.push(array[i]*array[i+1])
  }
  return Math.max(...arr)
}

//We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).
// So given a string "super", we should return a list of [2, 4].
// Some examples:

// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]

function vowelIndices(word){
  word = word.toLowerCase()
  var ans = [];
  var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  for(i=0; i<word.length; i++){
    if(vowels.indexOf(word[i])>=0){ans.push(i+1)}
  }
  return ans
}

//Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.
// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road ("_") or bumps ("n"), work out if you make it home safely. 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".

function bump(x){
  let flat = 0
  let bumps = 0
  for(let i = 0; i < x.length;i++){
    if(x[i] === "_"){
      flat++
    }else if(x[i]=== "n"){
      console.log(bumps++)
    }
  }
  return bumps > 15 ? 'Car Dead' : 'Woohoo!'
}

//We want to generate a function that computes the series starting from 0 and ending until the given number.

// Example:
// Input:
// > 6
// Output: 0+1+2+3+4+5+6 = 21

var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    var m = [], s=0;
    if(count === 0) return count + '=' + 0; //if count is 0 return this string literal
    if(count < 0) return count + '<' + 0;//if count is a negative number return this str literal
    
    for(var i=0; i<=count; i++) { //loop from 0 to count value
      s+=i;  // add as you increment by 1 from 0 to value
      m.push(i); // push each value into an array
    };

    return m.join('+') + ' = ' + s; // finally, join the array number with a '+' and have it '=' to the value of s
  };

  return SequenceSum;

})();

//Return an array containing the numbers from 1 to N, where N is the parametered value.
// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

function fizzbuzz(n){
  let arr = []
  for(let i = 1; i <= n; i++){
    if(i % 3 === 0 && i % 5 ===0){
      arr.push('FizzBuzz')
    }else if(i % 3 === 0){
      arr.push('Fizz')
    }else if(i % 5 === 0){
      arr.push('Buzz')
    }else{
      arr.push(i)
    }
  }
  return arr
}

//Given a positive integer n, calculate the following sum:

// n + n/2 + n/4 + n/8 + ...
// All elements of the sum are the results of integer division.
// Example:  25  =>  25 + 12 + 6 + 3 + 1 = 47

function halvingSum(n) {
  let s = 0
 while(n>0){
   s+=n
   n = Math.floor(n/2)
 }
  return s
}

//Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.
// For example:
// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]

function evenNumbers(array, number) {
  return array.filter(el => el % 2 === 0).slice(-number) //filter positive integers and then slice from the end of the array .slice(-x) since we only want the 'number' of even integers
}

//Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product.

const minSum = arr =>
  arr.sort((a, b) => a - b).reduce((pre, val) => pre + val * arr.pop(), 0); //first sort the array from lowest to greatest. Then reduce it to where we multiply the first value in the array with the last one and as each beginning value gets multiplied with the last one in the array, we sum that while removing the last number in the array.

//Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

var greet = function(name) {
  let nam = name.split('').map(el => el.toUpperCase()).slice(0,1).join('') //capitalize the array and then only slice the first letter
  return 'Hello '+  nam + name.slice(1).toLowerCase() + '!' // return "Hello " + the sliced off letter and the sliced off rest of the letters from the original array and merge them while making sure the rest of the letters are converted to lower case
};

//ANOTHER SOLUTION 

var greet = function(name) {
  return "Hello " + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + "!"; //shorter form but essesntially the same concept as the first solution above
};

//Implement a function, which takes a non-negative integer, representing the number of eggs to boil. It must return the time in minutes (integer), which it takes to have all the eggs boiled.
// Rules
// you can put at most 8 eggs into the pot at once
// it takes 5 minutes to boil an egg
// we assume, that the water is boiling all the time (no time to heat up)
// for simplicity we also don't consider the time it takes to put eggs into the pot or get them out of it

function cookingTime(eggs) {
  return Math.ceil(eggs/8) * 5
}



  