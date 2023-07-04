function bouncer(arr) {
  let u = [];
  for (let i = 0; i < arr.length; i++){
    arr[i] ? u.push(arr[i]) : false;
    
  }
  console.log(u)
  return u;
}

bouncer([7, "ate", "", false, 9]);
