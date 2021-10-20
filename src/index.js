import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import App from "./App";
import { GlobalStyles } from "./global-styles";
import { firebase } from "./lib/firebase.prod.js";
import { FiresebaseContext } from "./context/firebase";

ReactDOM.render(
  <>
    <FiresebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FiresebaseContext.Provider>
  </>,
  document.getElementById("root")
);
