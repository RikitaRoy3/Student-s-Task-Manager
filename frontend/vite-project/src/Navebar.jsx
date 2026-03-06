import React from "react";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>Student Task Manager</h2>

      <ul style={styles.menu}>
        <li style={styles.item}>Home</li>
        <li style={styles.item}>Tasks</li>
        <li style={styles.item}>Add Task</li>
        <li style={styles.item}>Completed</li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#282c34",
    color: "white",
  },
  logo: {
    margin: 0,
  },
  menu: {
    display: "flex",
    listStyle: "none",
    gap: "20px",
    margin: 0,
  },
  item: {
    cursor: "pointer",
  },
};

export default Navbar;