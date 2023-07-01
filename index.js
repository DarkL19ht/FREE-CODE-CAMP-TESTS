function repeatStringNumTimes(str, num) {
 let myAnswer = ""
 if (num >= 0){
  for (let i = 1; i <= num; i++){
     myAnswer += str;
  }
  console.log(myAnswer);
  return myAnswer;
  }else {
    return "";
  }

}

repeatStringNumTimes("abc", 3);
