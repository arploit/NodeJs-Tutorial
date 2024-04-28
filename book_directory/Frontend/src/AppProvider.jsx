import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Routes from "./Routes/Routes";

/*
  TODO: CReate a Search 
  TODO: Create a SortBy Page
  TODO: Create a Book Detail Page

*/
const AppProvider = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default AppProvider;
