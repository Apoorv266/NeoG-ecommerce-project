import { createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
export const AuthContext = createContext();
export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    setIsLoggedIn(true)
    navigate(location?.state?.from?.pathname);
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  }
  return (
    <AuthContext.Provider value={{ isLoggedIn, handleLogin,handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}