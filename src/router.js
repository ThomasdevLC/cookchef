import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";

const Homepage = lazy(() => import("./pages/Homepage/Homepage"));
const Admin = lazy(() => import("./pages/Homepage/Admin/Admin"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "admin",
        element: <Admin />,
      },
    ],
  },
]);
