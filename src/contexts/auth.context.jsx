import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const { isLoggedIn, token: savedToken } = JSON.parse(
    localStorage.getItem("login")
  ) || { isLoggedIn: false, token: null };

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(isLoggedIn);
  const [token, setToken] = useState(savedToken);

  return (
    <AuthContext.Provider
      value={{ isUserLoggedIn, setIsUserLoggedIn, token, setToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useContext must be defined within a AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
