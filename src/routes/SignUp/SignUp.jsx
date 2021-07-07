import React, { useEffect, useState } from "react";
import styles from "./SignUp.module.css";
import { Link } from "react-router-dom";

export const SignUp = () => {
  const [userInput, setUserInput] = useState({
    username: "",
    password: "",
    email: "",
  });
  useEffect(() => {
    document.title = "Fin Mart | Signup";
  }, []);

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
            type="text"
            name="username"
            placeholder="Name"
            value={userInput.username}
            onChange={(e) => {
              setUserInput((userInput) => {
                return { ...userInput, username: e.target.value };
              });
            }}
            autoFocus
            required
          />
        </div>
        <div className={styles.inputField}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={userInput.email}
            onChange={(e) => {
              setUserInput((userInput) => {
                return { ...userInput, email: e.target.value };
              });
            }}
            required
          />
        </div>
        <div className={styles.inputField}>
          <input
            type="password"
            name="password"
            placeholder="Password"
            aria-label="Password"
            value={userInput.password}
            onChange={(e) => {
              setUserInput((userInput) => {
                return { ...userInput, password: e.target.value };
              });
            }}
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
