import React from "react";
import { ApiContext } from "../../../../context/ApiContext";
import { useContext } from "react";
import styles from "./Recipe.module.scss";

const Recipe = ({
  recipe: { title, image, liked, _id },
  toggleLikedRecipe,
}) => {
  const BASE_URL_API = useContext(ApiContext);

  const handleClick = async () => {
    try {
      const response = await fetch(`${BASE_URL_API}/${_id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ liked: !liked }),
      });
      if (response.ok) {
        const updateRecipe = await response.json();
        toggleLikedRecipe(updateRecipe);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div onClick={handleClick} className={styles.recipe}>
      <div className={styles.imageContainer}>
        <img src={image} alt="recette" />
      </div>

      <div
        className={` ${styles.recipeTitle} d-flex flex-column justify-content-center align-items-center `}
      >
        <h3 className="mb-10">{title}</h3>
        <i className={`fa-solid fa-heart ${liked ? "text-primary" : ""}`}></i>
      </div>
    </div>
  );
};

export default Recipe;
