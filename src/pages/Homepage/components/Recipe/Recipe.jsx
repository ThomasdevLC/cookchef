import React from "react";
import styles from "./Recipe.module.scss";

const Recipe = ({ recipe, updateRecipe, deleteRecipe }) => {
  const handleLike = () => {
    updateRecipe({
      ...recipe,
      liked: !recipe.liked,
    });
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    deleteRecipe(recipe._id);
  };
  return (
    <div onClick={handleLike} className={styles.recipe}>
      <i onClick={handleDelete} className="fa-solid fa-xmark"></i>
      <div className={styles.imageContainer}>
        <img src={recipe.image} alt="recette" />
      </div>

      <div
        className={` ${styles.recipeTitle} d-flex flex-column justify-content-center align-items-center `}
      >
        <h3 className="mb-10">{recipe.title}</h3>
        <i
          className={`fa-solid fa-heart ${recipe.liked ? "text-primary" : ""}`}
        ></i>
      </div>
    </div>
  );
};

export default Recipe;
