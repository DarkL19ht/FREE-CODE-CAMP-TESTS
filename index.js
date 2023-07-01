function factorialize(num) {
  if (num > 0) {
    for (let i = num - 1; i > 0; i--){
       num *=  i
    }
   console.log(num);
  }else if (num == 0){
    num = 1;
    console.log(num);
  }
  return num;
}

factorialize(0);
