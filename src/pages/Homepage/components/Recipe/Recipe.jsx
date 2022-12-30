import React from "react";
import { ApiContext } from "../../../../context/ApiContext";
import { useContext } from "react";
import styles from "./Recipe.module.scss";

const Recipe = ({
  recipe: { title, image, liked, _id },
  toggleLikedRecipe,
  deleteRecipe,
}) => {
  const BASE_URL_API = useContext(ApiContext);

  const handleLike = async () => {
    try {
      const response = await fetch(`${BASE_URL_API}/${_id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ liked: !liked }),
      });
      if (response.ok) {
        const updatedRecipe = await response.json();
        toggleLikedRecipe(updatedRecipe);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleDelete = async (e) => {
    e.stopPropagation();
    try {
      const response = await fetch(`${BASE_URL_API}/${_id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        deleteRecipe(_id);
      }
    } catch (e) {
      console.log("erreur");
    }
  };
  return (
    <div onClick={handleLike} className={styles.recipe}>
      <i onClick={handleDelete} className="fa-solid fa-xmark"></i>
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
