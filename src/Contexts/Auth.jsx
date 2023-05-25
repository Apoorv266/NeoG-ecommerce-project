import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { productContext } from "./ProductContext";
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const { setloader } = useContext(productContext);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const storageToken = JSON.parse(localStorage.getItem("token"));
  const storageUser = JSON.parse(localStorage.getItem("user"));
  const [token, settoken] = useState(storageToken?.token);
  const [user, setUser] = useState(storageUser?.user);

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = async (email, password) => {
    if (email && password !== "") {
      try {
        const {
          data: { foundUser, encodedToken },
          status,
        } = await axios.post("/api/auth/login", {
          email: email,
          password: password,
        });
        if (status === 200) {
          localStorage.setItem(
            "token",
            JSON.stringify({ token: encodedToken })
          );
          settoken(encodedToken);
          localStorage.setItem("user", JSON.stringify({ user: foundUser }));
          setUser(foundUser);

          setloader(true);
          setTimeout(() => {
            setIsLoggedIn(true);
            if (location.state === null) {
              navigate("/products");
            } else {
              navigate(location?.state?.from?.pathname);
            }
            setloader(false);
          }, 1000);
        }
      } catch (error) {
        console.log("error:", error);
      }
    }
  };

  const handleSignup = async (email, password, firstName, lastName) => {
    if (email && firstName && lastName && password !== "") {
      try {
        const {
          data: { createdUser, encodedToken },
          status,
        } = await axios.post("api/auth/signup", {
          email: email,
          password: password,
          firstName: firstName,
          lastName: lastName,
        });

        if (status === 201) {
          localStorage.setItem(
            "token",
            JSON.stringify({ token: encodedToken })
          );
          settoken(encodedToken);
          localStorage.setItem("user", JSON.stringify({ user: createdUser }));
          setUser(createdUser);

          setloader(true);
          setTimeout(() => {
            setIsLoggedIn(true);
            setloader(false);
            navigate("/products");
          }, 1000);
        }
      } catch (error) {
        console.log("error:", error);
      }
    }
  };

  const handleLogout = () => {
    settoken("");
    setUser("");
    localStorage.clear();
    setIsLoggedIn(false);
  };
  console.log("user", user);
  console.log("storage", storageUser)
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        handleLogin,
        handleLogout,
        handleSignup,
        user,
        token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
