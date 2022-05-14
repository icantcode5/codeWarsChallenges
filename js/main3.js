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

//Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

function likes(names){
    if(names.length === 0){
        return 'no one likes this'
        }else if(names.length === 1){
        return `${names[0]} likes this`
        }else if(names.length === 2){
        return `${names[0]} and ${names[1]} like this`
        }else if(names.length === 3){
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
        }else{
            return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
        } 
}

//ALSO ANOTHER SOLUTION, BEST PRACTICE SOLUTION

function likes(names) {
    names = names || [];
    switch(names.length){
      case 0: return 'no one likes this'; break;
      case 1: return names[0] + ' likes this'; break;
      case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
      case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
      default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
    }
}

//Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

var countBits = function(n) {
    return n.toString(2).split('').reduce((acc,cur)=>acc + +cur,0)
};

//Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

function createPhoneNumber(numbers){
    return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}` //template literal works here beacuase format never changes and array length stays the same too
  }

//ALSO ANOTHER SOLUTION

function createPhoneNumber(numbers){
    return numbers.reduce((p,c) => p.replace('x',c), "(xxx) xxx-xxxx");
}

//Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text){
    return text.toLowerCase().split('').filter((element,i,arr) => i !== arr.indexOf(element)).filter((element,i,arr) => i === arr.indexOf(element)).length //filter and find the repeated elements and then filter out to keep only one unique repeated element. !!!Only problem is this solution is slow compared to other ones
}

//ALSO ANOTHER SLIGHTLY FASTER SOLUTION

function duplicateCount(text){
    return text.toLowerCase().split('').filter(function(val, i, arr){
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
}

//The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(word){
    let words = ''
    word.toLowerCase().split('').map((element,i,arr) => {
      if(arr.indexOf(element) === arr.lastIndexOf(element)){ //if both the same indeces are returned from checking the array from the right and left side, then the element is unique and doesn't appear twice.
        words += '('
      }else{
      words += ')'
    }
    })
    return words
}

//You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

function isValidWalk(walk) {
    let count = 0
    let count1 = 0
    if(walk.length > 10){
      return false
    }
    walk.map(element => {
      if(element === 'n'){
        count++
      }else if(element === 's'){
        count--
  }
    })
     walk.map(element => {
      if(element === 'w'){
        count1++
      }else if(element === 'e'){
        count1--
  }
    })
     return walk.length === 10 && count1 === 0 && count === 0
}

//Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

function persistence(num) {
    let i = 0
      while(num >= 10){
        num = num.toString().split('').reduce((acc,cur)=> acc * (+cur),1)
       i++
  }
    return i
}

//In this kata you are required to, given a string, replace every letter with its position in the alphabet.
//If anything in the text isn't a letter, ignore it and don't return it.

function alphabetPosition(text) {
    let arr = []
    let text2 =  text.toLowerCase()
    let alphabet ='abcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i < text.length; i++){
      for(let j = 0; j < alphabet.length; j++){
        if(text2[i] === alphabet[j] ){
          arr.push(alphabet.indexOf(text2[i])+1)
        }
      }
    }
    return arr.join(' ')
}

//Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
//Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

function order(words){
    var array = words.split(' ');
    var sortedArray = [];
    for(let i = 0; i <= array.length; i++) { //loops through numbers array.length amount of times and looks for the index of each number starting from 0
      for(let j = 0; j < array.length; j++) { //second loops goes through the array of strings and is compared against each index of the first loop, meaning its looking through each string element as it's seeing where the number 1 is, then the number 2, then 3 and so on and so forth
        if(array[j].indexOf(i) >= 0) { //if the number's index, in ascending order, is found in the string element
          sortedArray.push(array[j]);// push that element into a new array meaning the new array will be filled with the strings in ascending order thus completing the kata!
        }
      }
    }
    return sortedArray.join(' ');
}

//Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder=function(iterable){
    let arr = []
    for(let i = 0; i < iterable.length;i++){
      if(iterable[i] !== iterable[i+1]){ //if the element targeted isn't the same as the element next to it then
        arr.push(iterable[i]) // add that element to a new array
      }
    }
    return arr
}

//ALSO ANOTHER, BUT SHORTER, SOLUTION

var uniqueInOrder=function(iterable){
    return [...iterable].filter((element, i) => element !== iterable[i+1]) //spread the string into an array and then filter in only the elements that aren't equal to the element next to them 
}

//Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
// If it is the case we will return k, if not return -1.
// Note: n and p will always be given as strictly positive integers.

// digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
// digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
// digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2

function digPow(n, p){
    var ans = (''+n).split('')
      .map(function(d,i){
        return Math.pow(+d,i+p) //for each element, raise it to the power of the index + given value of p
      }).reduce(function(s,v){ 
        return s+v  // add all the elements up 
      }) / n // divide sum of elements by n
    return ans % 1 ? -1 : ans  // does the answer return a remainder? return -1 if not, return the answer
}

//You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.
//For example:

// Let's say you are given the array {1,2,3,4,3,2,1}:
// Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

function findEvenIndex(arr){
    let equalIndex = -1
    arr.forEach((element, i)=> {
      let leftSide = arr.slice(0,i).reduce((acc,sum) => acc + sum,0) //leftSide holds a piece(slice) of the array on the left side of the looped through index
      let rightSide = arr.slice(i+1).reduce((acc,sum) => acc + sum,0)//rightSide holds a slice of the array starting from the current index + 1 to the end of the array
      if(leftSide == rightSide){ //if the values on the right side and left side === eachother ...
         equalIndex = i // set equalIndex to the index where both side's values equal eachother
        }
    })
    return equalIndex //if the array doesn't have an index value where the right and left sides don't equal eachother, then return the original value of -1
}

//Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str){
    let arr = str.split('')
    for(let i = 0;i<arr.length;i++){ //loop through all the characters(elements) in the array
      if(arr[i] === '-'|| arr[i] === '_'){ //if we find the character '-' or '_' ...
        arr[i+1] = arr[i+1].toUpperCase() //then the element after the character, capitalize it 
        arr[i] = '' //also replace the '-' and '_' with a space ('')
      }
    }
    return arr.join('') //join at all the spaces to finally get the camel case string
}

//A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits), which is narcisstic:
// 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

function narcissistic(value) {
    let length = value.toString().length // # of digits of each value passed through
    let num = value.toString().split('').reduce((acc,cur)=> acc + Math.pow(cur,length),0) // place digits in an array, raise each digit to the power of the # of digits and then add them all up
    return num === value? true : false // if the sum is equal to the original value then return true else false  
}

//

  










   



