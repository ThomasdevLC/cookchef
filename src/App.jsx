import React, { useState } from "react";
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.scss";
import Admin from "./pages/Admin/Admin";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { seedRecipes } from "./data/Seed";

// seedRecipes();

function App() {
  const [page, setPage] = useState("homepage");

  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header />
      <div className="flex-fill d-flex flex-column">
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}
export default App;
