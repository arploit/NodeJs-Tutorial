module.exports = sortByAuthor = (books) => {
  return books.sort((a, b) => a.author.localeCompare(b.author));
};
