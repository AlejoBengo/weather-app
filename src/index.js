//______________________________________________________________________________
/*IMPORT DE UTILIDADES*/
import React from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
/*IMPORT DEL STORE*/
import { store } from "./redux/store/index";
/*IMPORT DE CSS*/
import "./index.css";
//______________________________________________________________________________

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
