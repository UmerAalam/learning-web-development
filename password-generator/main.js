// function randomPassword(number) {
//     let characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     let randomPassword = "";
//     for(let i = 0;i<= number;i++)
//         {
//             randomPassword += characters.charAt(Math.floor(Math.random() * characters.length));
//         }
//         return randomPassword;
//     }
// console.log(randomPassword(25));
// let arr = [22,48,36];


// const books = [
//     {
//         title: "Hamlet",
//         authorName: "William Shakespeare",
//         releaseYear:1601,
//     },
//     {
//         title: "Lord of the flies",
//         authorName: "Williams Goldings",
//         releaseYear:1954,
//     },
//     {
//         title: "King Lear",
//         authorName: "William Shakespeare",
//         releaseYear:1606,
//     },
//     ];
    
//     const releaseYearComparer = (a, b) => a.releaseYear - b.releaseYear
    
//     function sortByYear(book1,book2) {
//     const res = book1.releaseYear - book2.releaseYear;
//       if(res < 0) {
//         return -1;
//       }
//       else if(res > 0) {
//         return 1;
//       }
//       else {
//         return 0;
//       }
//     }
// const filteredBooks = books.filter((author) => {
//     return author.authorName === "William Shakespeare";  
// });
// filteredBooks.sort(sortByYear);
// console.log(filteredBooks);

// function filter(arr,callBackFn) {
//     const newArray = [];
//     arr.forEach((value) => {
//         const result = callBackFn(value);
//         if (result) {
//             newArray.push(value);
//         }
//     });
//     return newArray;
// }

// function reduce(arr, callBackFn, initialValue) {
//     let acc = initialValue;

//     for (const curr of arr) {
//         acc = callBackFn(acc, curr);
//     }

//     return acc;
// };

// const array = [1,2,3,4,5];

// const result = reduce(array, (acc, curr) => {
//     return acc + curr;
// }, 0);

// console.log(result);

// const storyContainer = document.querySelector(".story-container");

const instrumentsArr = [
    { category: "woodwinds", instrument: "Flute", price: 500 },
    { category: "woodwinds", instrument: "Clarinet", price: 200 },
    { category: "woodwinds", instrument: "Oboe", price: 4000 },
    { category: "brass", instrument: "Trumpet", price: 200 },
    { category: "brass", instrument: "Trombone", price: 300 },
    { category: "brass", instrument: "French Horn", price: 4300 },
    { category: "percussion", instrument: "Drum Set", price: 500 },
    { category: "percussion", instrument: "Xylophone", price: 3000 },
    { category: "percussion", instrument: "Cymbals", price: 200 },
    { category: "percussion", instrument: "Marimba", price: 3000 }
  ];
  
//   const selectContainer = document.querySelector("select");
//   const productsContainer = document.querySelector(".products-container");
  function instrumentCards(instrumentCategory) {
    if(instrumentCategory === "all") {
        return instrumentsArr;
    }
    else
    {
        
    }
}
const filteredInstruments = instrumentsArr.filter((value) => {  
    return value.category == instrumentCategory;
})
//   selectContainer.addEventListener("change", () => {
//     console.log(selectContainer.value);
//   });