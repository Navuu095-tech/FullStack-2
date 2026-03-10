import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2>My Blog</h2>
      <div>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/blog" style={styles.link}>Blog</Link>
        <Link to="/analytics" style={styles.link}>Analytics</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    width: "100%",
    height: "70px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 40px",
    background: "#222",
    color: "white",
    boxSizing: "border-box", // prevents overflow
  },
  link: {
    marginLeft: "20px",
    color: "white",
    textDecoration: "none",
  },
};

export default Navbar;