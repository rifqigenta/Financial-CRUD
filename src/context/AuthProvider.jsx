import React, { useContext, useEffect } from "react";
import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const logout = () => {
    localStorage.removeItem("authToken");
    setAuth(false);
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setAuth(true);
    }
    setLoading(false);
  }, []);

  return <AuthContext.Provider value={{ auth, setAuth, loading, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
