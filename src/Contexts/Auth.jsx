import axios from "axios";
import { createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
export const AuthContext = createContext();
export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
        console.log(foundUser);
        if (status === 200) {
          console.log(foundUser, encodedToken);
        }
      } catch (error) {
        console.log("error:", error);
      }
    }

    // setIsLoggedIn(true)
    // navigate(location?.state?.from?.pathname);
  };


//   const handleSignUp = async () =>{
// const response = await axios.post("")
//   }

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <AuthContext.Provider value={{ isLoggedIn, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}
