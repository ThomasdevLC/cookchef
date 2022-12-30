import React from "react";
import styles from "./HeaderMenu.module.scss";

const HeaderMenu = ({ setPage }) => {
  return (
    <ul className={`${styles.MenuContainer} card`}>
      <li onClick={() => setPage("admin")}>Ajouter une recette</li>
      <li>Wishlist</li>
      <li>Connexion</li>
    </ul>
  );
};

export default HeaderMenu;
