const books = require("../../../..//booksJson/books.json");

module.exports = searchBook = (query) => {
  let { name, author, year } = query || { name: "", author: "", year: 0 };
  let isNameExist = name?.trim().length ? true : false,
    isAuthorExist = author?.trim().length ? true : false,
    isYearExist = year ? true : false,
    searchedBooks = [];

  if (isNameExist || isAuthorExist || isYearExist) {
    books.forEach((bookItems) => {
      console.log(bookItems);
      debugger;
      if (
        (isAuthorExist &&
          bookItems["author"] &&
          bookItems["author"].toLowerCase().includes(author.toLowerCase())) ||
        (isNameExist &&
          bookItems["title"] &&
          bookItems["title"].toLowerCase().includes(name.toLowerCase())) ||
        (isYearExist &&
          bookItems["year"] &&
          bookItems["year"].toString().includes(year.toString()))
      )
        searchedBooks.push(bookItems);
    });

    return searchedBooks;
  }
  //Incase there is empty search query
  return books;
};
