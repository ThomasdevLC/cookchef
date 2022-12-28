import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/assets/styles/index.scss";
import { ApiContext } from "./context/ApiContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApiContext.Provider value={"https://restapi.fr/api/recipes"}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApiContext.Provider>
);
