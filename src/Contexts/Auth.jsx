import axios from "axios";
import { createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastError, ToastSuccess } from "../Components/Toast";
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [loader, setloader] = useState(false)
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
        if (status === 200 || status === 201) {
          // storing token in local storage and state
          localStorage.setItem(
            "token",
            JSON.stringify({ token: encodedToken })
          );
          settoken(encodedToken);

          // storing user in local storage and state
          localStorage.setItem("user", JSON.stringify({ user: foundUser }));
          setUser(foundUser);
          setloader(true);
          setTimeout(() => {
            if (location.state === null) {
              navigate("/products");
            } else {
              navigate(location?.state?.from?.pathname);
            }
            setloader(false);
          }, 1000);
          ToastSuccess("User logged in successfully !")
        }
      } catch (error) {
        if (error.response.status === 404) {
          ToastError("User need to signup !")
        }else{
          ToastError("Login failed try again !")
        }
      }
    }else{
      ToastError("Input fields are empty")
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

        if (status === 201 || status === 200) {
          localStorage.setItem(
            "token",
            JSON.stringify({ token: encodedToken })
          );
          settoken(encodedToken);
          localStorage.setItem("user", JSON.stringify({ user: createdUser }));
          setUser(createdUser);

          setloader(true);
          setTimeout(() => {
            setloader(false);
            navigate("/products");
          }, 1000);
        }
        ToastSuccess("User Sign up successful !")
      } catch (error) {
       console.log(error)
      }
    }else{
      ToastError("Input fields are empty")
    }
  };

  const handleLogout = () => {
    setloader(true);
    settoken(null);
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setTimeout(() => {
      setloader(false);
    }, 2000);
    ToastSuccess("User logged out successfully!Bye👋")
  };

  return (
    <AuthContext.Provider
      value={{
        handleLogin,
        handleLogout,
        handleSignup,
        user,
        token,
        setloader,
        loader
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
