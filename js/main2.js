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

