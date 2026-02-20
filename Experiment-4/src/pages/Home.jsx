import { useAppContext } from "../context/AppContext";

function Home() {
  const { favorites, dispatch } = useAppContext(); // ⭐ use context

  return (
    <div style={styles.wrapper}>
      <div style={styles.content}>
        <h1>Welcome to My Blog</h1>
        <p>Discover articles about technology and programming</p>

        {/* New content section */}
        <div style={styles.section}>
          <h2>What You’ll Find Here</h2>
          <p>
            This blog shares simple explanations, tips, and guides on web
            development, programming concepts, and modern technologies.
          </p>

          <ul style={styles.list}>
            <li>✔ Beginner friendly tutorials</li>
            <li>✔ Latest tech insights</li>
            <li>✔ Practical coding tips</li>
          </ul>

          {/* ⭐ Context feature (small, non-intrusive) */}
          <button
            style={styles.button}
            onClick={() =>
              dispatch({ type: "ADD_FAVORITE", payload: "Sample Blog" })
            }
          >
            Add to Favorites
          </button>

          <p style={styles.counter}>
            Favorites Count: {favorites.length}
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: "calc(100vh - 70px)",
    display: "grid",
    placeItems: "center",
    padding: "20px",
  },
  content: {
    width: "100%",
    maxWidth: "700px",
    textAlign: "center",
  },
  section: {
    marginTop: "30px",
    textAlign: "left",
  },
  list: {
    marginTop: "10px",
    paddingLeft: "20px",
  },
  button: {
    marginTop: "20px",
    padding: "8px 14px",
    cursor: "pointer",
  },
  counter: {
    marginTop: "10px",
    fontWeight: "bold",
  },
};

export default Home;