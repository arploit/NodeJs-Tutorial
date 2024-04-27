module.exports = sortByName = (books) => {
  return books.sort((a, b) => a.title.localeCompare(b.title));
};
