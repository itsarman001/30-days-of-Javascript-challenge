// Task 1 & 2
const book = {
  title: "Harry Potter and the Sorcerer's Stone",
  author: "J.K. Rowling",
  year: 1997,
  /* Task 3 */
  /* Task 7 */
  getBookInfo: function () {
    return `${this.title} by ${this.author} published in ${this.year}`;
  },
  /* Task 4 */
  updateYear: function (newYear = this.year) {
    return (this.year = newYear);
  },
};
console.log("Task 1 & 2: Object Creation and Access Properties");
console.log(book.title);
console.log(book.author);
console.log(book.year);

// Task 3
console.log("Task 3 & Task 7");
console.log(book.getBookInfo());

// Task 4
console.log("Task 4");
console.log(book.updateYear());

// Task 5
const harryPotterSeries = {
  series: "Harry Potter",
  author: "J.K. Rowling",
  from: 1997,
  to: 2007,
  books: [
    {
      title: "Harry Potter and the Sorcerer's Stone",
      year: 1997,
    },
    {
      title: "Harry Potter and the Chamber of Secrets",
      year: 1998,
    },
    {
      title: "Harry Potter and the Prisoner of Azkaban",
      year: 1999,
    },
    {
      title: "Harry Potter and the Goblet of Fire",
      year: 2000,
    },
    {
      title: "Harry Potter and the Order of the Phoenix",
      year: 2003,
    },
    {
      title: "Harry Potter and the Half-Blood Prince",
      year: 2005,
    },
    {
      title: "Harry Potter and the Deathly Hallows",
      year: 2007,
    },
  ],
};

// Task 6
harryPotterSeries.books.forEach((book) => console.log(book.title));

// Task 8
for (const key in book) {
  console.log(`${key}: ${book[key]}`);
}
