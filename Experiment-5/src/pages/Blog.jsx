function Blog() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Blog Posts</h1>

      <div style={styles.post}>
        <h2>Understanding React Router</h2>
        <p>
          React Router helps create multi-page applications without refreshing
          the page, improving user experience.
        </p>
      </div>

      <div style={styles.post}>
        <h2>Why JavaScript is Important</h2>
        <p>
          JavaScript powers interactive web applications and is essential for
          modern web development.
        </p>
      </div>

      <div style={styles.post}>
        <h2>Frontend vs Backend</h2>
        <p>
          Frontend focuses on UI while backend handles server logic and data.
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
  padding: "40px",
  maxWidth: "900px",
  margin: "0 auto",
},
  heading: {
    textAlign: "center",
    marginBottom: "30px",
  },
  post: {
    borderBottom: "1px solid #ddd",
    padding: "15px 0",
  },
};

export default Blog;
