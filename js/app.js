const numbers = [1, 2, 3, 4, 5];
let sum = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4];
let avarage = sum / numbers.length;
console.log(sum, avarage);

const book = {
  title: "Rapid nightly",
  author: "Zura Jishkariani",
  yearPublished: 2021,
};
console.log(
  `${book.title} by ${book.author} was published in ${book.yearPublished}.`
);

book.yearPublished = 2022;
console.log(book);

const people = [
  {
    name: "daviti",
    age: 18,
    score: 75,
  },
  {
    name: "giorgi",
    age: 23,
    score: 79,
  },
  {
    name: "ana",
    age: 30,
    score: 85,
  },
];
console.table(people);
