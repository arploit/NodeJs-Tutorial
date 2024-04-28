export const transformDefaultResponse = (books) => {
  return books?.map((book) => {
    return {
      ...book,
      key: crypto.randomUUID(),
      imageLink: `https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/${book.imageLink}`,
    };
  });
};
