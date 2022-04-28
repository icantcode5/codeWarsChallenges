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

//



  