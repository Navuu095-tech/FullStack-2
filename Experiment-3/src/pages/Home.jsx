function Home() {
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
};

export default Home;