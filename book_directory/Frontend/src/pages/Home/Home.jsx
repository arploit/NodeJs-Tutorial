import React from "react";
import { useGetAllTheBooksQuery } from "../../Api/booksApi";
import BookItem from "Components/BookItem";

const Home = () => {
  const { data, isLoading, error } = useGetAllTheBooksQuery();
  return (
    <div>
      {isLoading ? (
        <div>Loadinggg......</div>
      ) : error ? (
        <div> Error {error}</div>
      ) : (
        data?.map((book) => {
          return <BookItem key={book.key} book={book} />;
        })
      )}
    </div>
  );
};

export default Home;
