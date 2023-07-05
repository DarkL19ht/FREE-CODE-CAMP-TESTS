function chunkArrayInGroups(arr, size) {
  let myArray = []
  for(let i = 0; i < arr.length; i+= size){
     let arr1 = arr.slice(i,i+size);
  myArray.push(arr1);
  console.log(myArray);
  }
  
  
  console.log(myArray);
  return myArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
