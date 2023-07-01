function largestOfFour(arr) {
  let arrayLargest = [];
  for (let i = 0; i < arr.length; i++){
    //let the declared largest number be the first value, this will compensate for the effect of negative (-) symbol in javascript
    let largestNum = arr[i][0];
    //in the second loop, start at index 1, because the largestNum is already assigned to index 0.
    for(let j = 1; j < arr[i].length; j++){
      if (arr[i][j] > largestNum) {
        largestNum = arr[i][j];
      }   
    }
    arrayLargest.push(largestNum);   
  }
 console.log(arrayLargest)
 return arrayLargest;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
