// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line


function add(bookList,bookName) {
  let newBookList = bookList.slice(0);
  
   newBookList.push(bookName);
   console.log(newBookList);
  return newBookList;
  // Change code above this line
}

// Change code below this line

function remove(bookList, bookName) {
  let newBookList = bookList.slice(0);
  const book_index = newBookList.indexOf(bookName);
  
  if (book_index >= 0) {

    newBookList.splice(book_index, 1);
    console.log(newBookList);
    return newBookList;

    // Change code above this line
    }
}
