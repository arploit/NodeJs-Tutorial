module.exports = sortByYear = (books) => {
  return books.sort((a, b) => a.year - b.year);
};
