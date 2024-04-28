import React from "react";
import styles from "./BookItem.less";

const BookItem = ({ book }) => {
  return (
    <div className={styles["book_block"]} key={book.key}>
      {book.author}
    </div>
  );
};

export default BookItem;
