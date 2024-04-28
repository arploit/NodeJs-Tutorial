export const transformDefaultResponse = (books) => {
  return books?.map((book) => {
    return {
      key: crypto.randomUUID(),
      ...book,
    };
  });
};
