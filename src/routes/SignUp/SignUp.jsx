import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { SERVER_URL } from "../../utils/constants.js";
import { useAuth } from "../../contexts/auth.context.jsx";
import styles from "./SignUp.module.css";
import { useLoadingScreen } from "../../contexts/loadingscreen.context";

export const SignUp = () => {
  const navigate = useNavigate();
  const { setToken, setIsUserLoggedIn } = useAuth();
  const [userInput, setUserInput] = useState({
    username: "",
    password: "",
    email: "",
  });
  const { setShowLoadingScreen } = useLoadingScreen();

  useEffect(() => {
    document.title = "Fin Mart | Signup";
  }, []);

  function signupHandler(e) {
    e.preventDefault();
    signup({
      ...userInput,
      setToken,
      setIsUserLoggedIn,
      setShowLoadingScreen,
      navigate,
    });
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

async function signup({
  username,
  password,
  email,
  setToken,
  setIsUserLoggedIn,
  setShowLoadingScreen,
  navigate,
}) {
  try {
    setShowLoadingScreen(true);
    const { data } = await axios.post(`${SERVER_URL}/api/v1/signup`, {
      username,
      password,
      email,
    });
    if (data?.success === true) {
      toast.info(data?.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setToken(data?.token);
      setIsUserLoggedIn(true);
      localStorage.setItem(
        "login",
        JSON.stringify({ isLoggedIn: true, token: data?.token })
      );
      navigate("/");
      console.log(
        "## Signup Successful, User Details: ",
        JSON.stringify(data?.user)
      );
    } else if (data?.success === false) {
      throw new Error(data?.message);
    }
  } catch (e) {
    toast.error("Signup Failed. Please try later! " + e, {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  } finally {
    setShowLoadingScreen(false);
  }
}
