import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/assets/styles/index.scss";
import { ApiContext } from "./context/ApiContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApiContext.Provider value={"https://restapi.fr/api/recipes"}>
      <RouterProvider router={router}></RouterProvider>
    </ApiContext.Provider>
  </React.StrictMode>
);
