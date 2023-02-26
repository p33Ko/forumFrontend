import React from "react";
import styles from "./navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.main}>
      <div className={styles.logoContainer}>
        <a href="/"> FORUM 4 US</a>
      </div>
      <div className={styles.login}>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </div>
    </nav>
  );
};

export default Navbar;
