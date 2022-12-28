import React from "react";
import styles from "./HeaderMenu.module.scss";

const HeaderMenu = () => {
  return (
    <ul className={`${styles.MenuContainer} card`}>
      <li>Wishlist</li>
      <li>Connexion</li>
    </ul>
  );
};

export default HeaderMenu;
