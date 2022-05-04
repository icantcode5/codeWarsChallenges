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