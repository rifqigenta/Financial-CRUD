import React from "react";
import { useAuth } from "../../../context/AuthProvider";

const ButtonLogout = () => {
  const { logout } = useAuth();
  return <button onClick={logout}>Logout</button>;
};

export default ButtonLogout;
