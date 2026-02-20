import { useMemo } from "react";
import { useAppContext } from "../context/AppContext";

function Analytics() {
  const { favorites, dispatch } = useAppContext();

  // ⭐ useMemo → derived calculation
  const totalFavorites = useMemo(() => {
    console.log("Calculating total favorites...");
    return favorites.length;
  }, [favorites]);

  return (
    <div style={styles.container}>
      <h1>Analytics Dashboard</h1>

      <p>Total Favorites: {totalFavorites}</p>

      <div style={styles.buttons}>
        <button
          onClick={() =>
            dispatch({ type: "ADD_FAVORITE", payload: "New Item" })
          }
        >
          Add Favorite
        </button>

        <button
          onClick={() =>
            dispatch({ type: "REMOVE_FAVORITE", payload: "New Item" })
          }
        >
          Remove Favorite
        </button>

        <button onClick={() => dispatch({ type: "CLEAR_FAVORITES" })}>
          Clear All
        </button>
      </div>

      <ul style={styles.list}>
        {favorites.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    maxWidth: "800px",
    margin: "0 auto",
  },
  buttons: {
    display: "flex",
    gap: "10px",
    margin: "20px 0",
  },
  list: {
    marginTop: "20px",
  },
};

export default Analytics;