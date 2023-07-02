function titleCase(str) {
 let newString = str.split(" ");
 let updatedString = [];
 for (let st in newString){
   updatedString[st] = newString[st][0].toUpperCase() + newString[st].slice(1).toLowerCase();
 }
 console.log(updatedString.join(" "));
 return updatedString.join(" ")

}

titleCase("I'm a little tea pot");
