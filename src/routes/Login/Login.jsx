import React, { useEffect, useState } from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    document.title = "Fin Mart | Login";
  }, []);

  function handleInpuEmail(e) {
    setEmail(e.target.value);
  }

  function handleInputPassword(e) {
    setPassword(e.target.value);
  }

  function loginHandler(e) {
    e.preventDefault();
  }
  return (
    <div className={styles.login}>
      <form className={styles.loginForm} onSubmit={loginHandler}>
        <h1 className={styles.loginHeading}>Login</h1>
        <h2 className={styles.loginSubHeading}>
          Please enter your Email and Password
        </h2>
        <div className={styles.inputField}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleInpuEmail}
            autoFocus
            required
          />
        </div>
        <div className={styles.inputField}>
          <input
            type="password"
            value={password}
            name="password"
            placeholder="Password"
            aria-label="Password"
            onChange={handleInputPassword}
            required
          />
        </div>
        <div className={styles.inputField}>
          <input type="submit" value="LOGIN" />
        </div>
        <div>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
        <div className={styles.exampleCredentials}>
          Test Username: test@abcd.com{<br />} Test Password: dnkne2F$2r2@jbj0L
        </div>
      </form>
    </div>
  );
};
