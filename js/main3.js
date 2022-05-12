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

//

  










   



