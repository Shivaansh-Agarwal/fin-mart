import React, { useEffect, useState } from "react";
import styles from "./SignUp.module.css";
import { Link } from "react-router-dom";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  useEffect(() => {
    document.title = "Fin Mart | Signup";
  }, []);

  function handleInputName(e) {
    setName(e.target.value);
  }
  function handleInpuEmail(e) {
    setEmail(e.target.value);
  }
  function handleInputPassword(e) {
    setPassword(e.target.value);
  }
  function signupHandler(e) {
    //TODO
    e.preventDefault();
  }

  return (
    <div className={styles.signup}>
      <form className={styles.signupForm} onSubmit={signupHandler}>
        <h1 className={styles.signupHeading}>Sign Up</h1>
        <h2 className={styles.signupSubHeading}>
          Please enter your Name, Email and Password
        </h2>
        <div className={styles.inputField}>
          <input
            type="name"
            name="name"
            placeholder="Name"
            value={name}
            onChange={handleInputName}
            autoFocus
            required
          />
        </div>
        <div className={styles.inputField}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleInpuEmail}
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
          <input type="submit" value="SIGN UP" />
        </div>
        <div>
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
};
