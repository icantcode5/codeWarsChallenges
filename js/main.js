//Get the mean of an array

function getAverage(marks){
    let results = marks.reduce((a,b)=> a+b,0)/marks.length
    return Math.floor(results)
  }