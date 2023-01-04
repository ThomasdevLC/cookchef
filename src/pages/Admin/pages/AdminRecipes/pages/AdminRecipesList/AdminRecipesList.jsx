import { useFetchRecipes } from "../../../../../../hooks/UseFetchRecipes";
import styles from "./AdminRecipesList.module.scss";
import { deleteRecipe as deleteR } from "../../../../../../apis";

function AdminRecipesList() {
  const [[recipes, setRecipes]] = useFetchRecipes();
  const deleteRecipe = async (_id) => {
    await deleteR(_id);
    setRecipes(recipes.filter((r) => r._id !== _id));
  };

  return (
    <ul className={styles.list}>
      {recipes.length
        ? recipes.map((r) => (
            <li key={r._id} className="d-flex align-items-center">
              <span className="flex-fill">{r.title}</span>
              <button className="btn btn-primary mr-15">Editer</button>
              <button
                onClick={() => deleteRecipe(r._id)}
                className="btn btn-danger"
              >
                Supprimer
              </button>
            </li>
          ))
        : null}
    </ul>
  );
}

export default AdminRecipesList;
