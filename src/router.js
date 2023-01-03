import { lazy } from "react";
import { createBrowserRouter, redirect } from "react-router-dom";
import App from "./App";

const Homepage = lazy(() => import("./pages/Homepage/Homepage"));
const Admin = lazy(() => import("./pages/Homepage/Admin/Admin"));
const AdminRecipes = lazy(() =>
  import("./pages/Homepage/Admin/pages/AdminRecipes/AdminRecipes")
);
const AdminUsers = lazy(() =>
  import("./pages/Homepage/Admin/pages/AdminUsers/AdminUsers")
);

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
        children: [
          {
            path: "recipes",
            element: <AdminRecipes />,
          },
          {
            path: "users",
            element: <AdminUsers />,
          },
          {
            index: true,
            loader: async () => redirect("recipes"),
          },
        ],
      },
    ],
  },
]);
