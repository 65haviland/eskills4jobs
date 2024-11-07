// let dept = 'programming';
// let Department='programming';
    
//     typeof('programming')
//     console.log(typeof(Department))
    
    
//         let grade= 'A1';
//         console.log(grade)

//         let age= 20;
//         age= 40;
//         typeof(20)
//         console.log(age);

//         let Firstname= 'koo';
//         let Lastname= 'akata';
//         console.log(Firstname)

//         let sum= 200 + 300;
//         let multiply= 400 * 2;
//         let divide= 400/2;
//         console.log(divide)
//         console.log(multiply)
    
//         let y= 200;
//         y *= 50;
//         y += 200;
//         console.log(y)
       
// let age = 50; 
// if 
//        (age < 18)
//       {console.log 
//     ( "you  are under age , so you are not eligible" ); }
// else if
//        ( age >= 18 && age <= 50 ) 
//       { console.log ( "you are eligible" ) }
// else
//       { console.log (" you are too old, so you are not eligible" );}

let day = 3;
switch(day) {
case 1: 
     console.log ("MONDAY")
     break;
case 2: 
     console.log ("TUESDAY")
    break;
case 3:
     console.log ("WEDNESDAY")
    break;
case 3:
    console.log ("INVALID DAY")
    break;
}

// function addAndlog(a, b){
// console.log(a + b);
//  }

// addAndlog(10 , 5);


// const addition =  addAndlog(a ,b) =>
//  return result = a + b;

// console.log (addAndlog (10 , 5);



// function calculateArea(width, height) 
// {
//     const area = width * height;
//     return area;
// }

// const width = 10;
// const height = 5;
// const result = calculateArea(width, height);

// console.log("The area of the rectangle is " + result);

//  ASIGNMENT 1. (calculating the area of a rectangle)
function calculateArea(width, height) {
    const area = width * height;
    return area;
}

const width = 10;
const height = 5;
const result = calculateArea(width, height);
console.log("The area of the rectangle is " + result);

//  ASIGNMENT 2

// Creating an array to hold book objects
let books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", yearPublished: 1960 },
    { title: "1984", author: "George Orwell", yearPublished: 1949 }
];

// Function to add a new book to the array
function addBook(newBook) {
    books.push(newBook);
}

// Function to list all books in the array
function listBooks() {
    books.forEach((book, index) => {
        console.log(`Book ${index + 1}:`);
        console.log(`Title: ${book.title}`);
        console.log(`Author: ${book.author}`);
        console.log(`Year Published: ${book.yearPublished}`);
        console.log('---');
    });
}

// Adding a few books and list them
addBook({ title: "The Great Gatsby", author: "F. Scott Fitzgerald", yearPublished: 1925 });
addBook({ title: "Pride and Prejudice", author: "Jane Austen", yearPublished: 1813 });

// List all books
listBooks();



    
