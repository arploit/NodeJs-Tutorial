import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Routes from "./Routes/Routes";
// import { useGetAllTheBooksQuery } from "./Api/booksApi";

const AppProvider = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default AppProvider;
