import React from "react";
import { useGetAllTheBooksQuery } from "../../Api/booksApi";
import BookItem from "Components/BookItem";
import "./Home.less";

const Home = () => {
  const { data, isLoading, error } = useGetAllTheBooksQuery();
  return (
    <div className={"home_Block"}>
      {isLoading ? (
        <div>Loadinggg......</div>
      ) : error ? (
        <div> Error {error}</div>
      ) : (
        data?.map((book, idx) => {
          return <BookItem key={book.key} book={book} />;
        })
      )}
    </div>
  );
};

export default Home;
