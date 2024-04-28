import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Routes from "./Routes/Routes";
// import { useGetAllTheBooksQuery } from "./Api/booksApi";

const AppProvider = () => {
  //   const [books, setBooks] = React.useState([]);
  //   const { data, isLoading, error } = useGetAllTheBooksQuery();

  //   React.useEffect(() => {
  //     async function fetchBooks() {
  //       try {
  //         const response = await fetch("http://localhost:3000");
  //         const data = await response.json(); // Wait for the JSON data
  //         setBooks(data); // Update the state with the fetched data
  //       } catch (error) {
  //         console.error("Failed to fetch books:", error);
  //       }
  //     }

  //     fetchBooks();
  //   }, []);
  return (
    <Provider store={store}>
      {/* {data} */}
      <Routes />
    </Provider>
  );
};

export default AppProvider;
